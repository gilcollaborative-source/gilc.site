import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Stripe from 'stripe';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Stripe if key is provided
const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey, { apiVersion: '2024-09-30.acacia' }) : null;

// CORS configuration
app.use(cors({
  origin: true,
  credentials: true,
}));

// Raw body for Stripe Webhook (must come before standard express.json)
app.post(
  '/api/stripe/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!stripe || !webhookSecret) {
      console.warn('[Stripe Webhook] Stripe or Webhook Secret not configured.');
      return res.status(400).send('Webhook not configured');
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      console.error(`[Stripe Webhook Error]: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log(`[Payment Success] Session ID: ${session.id}, Amount: ${session.amount_total} ${session.currency}`);
        // In production, save order to PostgreSQL database here
        break;
      }
      case 'payment_intent.payment_failed': {
        const intent = event.data.object;
        console.warn(`[Payment Failed] Intent ID: ${intent.id}`);
        break;
      }
      default:
        console.log(`[Unhandled Event] ${event.type}`);
    }

    res.json({ received: true });
  }
);

// Standard JSON parsing for all other API endpoints
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'GILC Web Platform',
    timestamp: new Date().toISOString(),
    stripeConfigured: !!stripe,
  });
});

// Create Stripe Checkout Session (Supports Alipay, WeChat Pay & Cards in CNY)
app.post('/api/stripe/create-checkout-session', async (req, res) => {
  try {
    if (!stripe) {
      return res.status(503).json({
        error: 'Stripe payments are currently in demonstration mode. Please configure STRIPE_SECRET_KEY in production.',
      });
    }

    const { programId, programName, amountCny, customerName, customerEmail, customerPhone } = req.body;

    const domain = process.env.PUBLIC_URL || `${req.protocol}://${req.get('host')}`;
    const unitAmount = Math.round(Number(amountCny || 500) * 100); // Amount in Fen (分)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['alipay', 'wechat_pay', 'card'],
      payment_method_options: {
        wechat_pay: {
          client: 'web',
        },
      },
      line_items: [
        {
          price_data: {
            currency: 'cny',
            product_data: {
              name: programName || 'GILC 国际协同学习项目咨询定金',
              description: `Global Integrated Learning Collaborative Inc. - 客户: ${customerName || '贵客'} (${customerEmail || ''})`,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail || undefined,
      metadata: {
        programId: programId || 'general_consultation',
        customerName: customerName || '',
        customerPhone: customerPhone || '',
      },
      success_url: `${domain}/payment-success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/#pricing`,
    });

    res.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error('[Create Checkout Session Error]:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

// Contact & Inquiry submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, program, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  console.log('[New Consultation Inquiry Received]:', {
    name,
    email,
    phone,
    program,
    message,
    timestamp: new Date().toISOString(),
  });

  // Returns successful acknowledgment
  res.json({
    success: true,
    message: 'Thank you for contacting GILC. Our admissions advisor will reach out to you within 24 hours.',
  });
});

// SPA Fallback for clean routing
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`GILC Web Platform is running at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Stripe: ${stripe ? 'Ready' : 'Mock/Preview Mode'}`);
  console.log(`====================================================`);
});
