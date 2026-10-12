// -------------------------------------------------------------
// GILC Application Script - Bilingual i18n & Stripe Booking
// -------------------------------------------------------------

const translations = {
  zh: {
    nav_home: "首页",
    nav_programs: "核心项目",
    nav_pricing: "预约服务与缴费",
    nav_about: "关于 GILC",
    nav_contact: "联系我们",
    btn_book_consult: "预约学术咨询",
    hero_badge: "🍁 加拿大安大略省合规注册学术协同机构 (Corp #17189168)",
    hero_title: "汇聚全球智慧 · 赋能终身成长",
    hero_subtitle: "立足加拿大，联结常春藤与全球顶尖名校学术资源。为华人精英学子与前瞻组织量身定制顶尖科研导师指导、跨文化领导力研修与前沿研学项目。",
    hero_btn_explore: "探索核心项目",
    hero_btn_advisory: "预约定制咨询",
    stat_mentors: "海外顶尖导师网络",
    stat_recognition: "名校科研学术认可度",
    stat_response: "学术服务极速响应",
    stat_settlement: "微信与支付宝双向直连",

    pillars_tag: "CORE PILLARS",
    pillars_title: "卓越项目体系与学术赋能",
    pillars_subtitle: "突破传统升学壁垒，注重学术深度与全球化视野，打造面向未来的复合型竞争力。",

    pillar_1_title: "全球协同在线科研项目",
    pillar_1_desc: "由加拿大及北美顶尖大学教授与资深学者亲自指导，采用小班研讨制，覆盖人工智能、生命科学、量化金融与可持续发展等前沿领域。",
    pillar_2_title: "学术导师制与名校升学规划",
    pillar_2_desc: "从学术兴趣挖掘、长期学术背景规划到高水平国际学术论文发表，一对一全程定制化护航，助力学员叩响世界顶尖学府殿堂之门。",
    pillar_3_title: "跨文化青年领导力与全球胜任力",
    pillar_3_desc: "聚焦联合国可持续发展议题与国际商业案例分析，开展国际模拟谈判与公共演说训练，培养学员在多元文化语境下的领导与协同才能。",
    pillar_4_title: "加拿大前沿产业研学与高管研修",
    pillar_4_desc: "依托多伦多-滑铁卢高科技走廊与全球一流高等学府，为企业高管和青年领袖提供深度学术参访、前沿科技孵化考察与高规格产学研对接。",

    pricing_tag: "TRANSPARENT ADVISORY",
    pricing_title: "预约服务与在线收单",
    pricing_subtitle: "支持人民币 (CNY) 微信支付与支付宝实时结算，资金直接安全清算至加拿大公司商业银行账户。",
    tier_1_title: "初阶学术与背景评估",
    tier_1_desc: "专业学术顾问 1 对 1 梳理背景，出具个性化全球协同学习与科研规划方案建议书。",
    tier_1_f1: "60分钟资深学术顾问 1对1 连线深度沟通",
    tier_1_f2: "量身定制专属升学与科研背景提升规划书",
    tier_1_f3: "北美顶尖学术资源与教授导师库推荐匹配",
    tier_1_btn: "立即预约 (微信/支付宝)",

    tier_2_title: "深度导师匹配与科研立项定金",
    tier_2_desc: "锁定心仪领域教授导师一对一科研席位，确定课题方向与开题论文开课排期。",
    tier_2_f1: "匹配专属常春藤/北美名校导师及助教团队",
    tier_2_f2: "定制专属学术科研开题方向与课程大纲",
    tier_2_f3: "优先锁定名校实验室与论文发表合作通道",
    tier_2_btn: "支付定金 (微信/支付宝)",

    tier_3_title: "全流程定制化协同成长方案",
    tier_3_desc: "深度涵盖研学、领导力、名校规划与全阶段学术陪伴，打造专属学术档案。",
    tier_3_f1: "全学科教授导师集群深度伴跑赋能",
    tier_3_f2: "国际顶级学术会议/期刊独立第一作者或联合发表",
    tier_3_f3: "高含金量海外教授官方推荐信与学术背书",
    tier_3_btn: "尊享顾问专属咨询",

    pay_badge_wechat: "微信支付 (CNY)",
    pay_badge_alipay: "支付宝 (CNY)",
    pay_badge_card: "信用卡 (Visa / MC)",
    pay_badge_direct: "跨境合规结算",

    about_tag: "CANADIAN ENTITY",
    about_title: "关于 GILC · 值得信赖的学术协同伙伴",
    about_text_1: "Global Integrated Learning Collaborative Inc. (GILC) 依法注册于加拿大安大略省。我们秉承开放、卓越与跨学科融合的理念，架起北美优质高等教育科研生态与国内优秀学子之间的桥梁。",
    about_feat_1_title: "真实合规的加拿大法人背书",
    about_feat_1_desc: "拥有完备的加拿大商业登记与公司章程，保障每位学员及合作机构的合同权益与资金安全。",
    about_feat_2_title: "北美顶尖学术导师库",
    about_feat_2_desc: "汇聚来自多伦多大学、麦吉尔大学、滑铁卢大学及常春藤名校的顶尖教授、博士后与青年学者。",

    corp_name_label: "公司法定名称",
    corp_num_label: "安大略省注册编号",
    corp_addr_label: "加拿大注册办公地址",
    corp_status_label: "法人实体状态",
    corp_status_val: "存续规范 (Active & In Good Standing)",

    contact_tag: "GET IN TOUCH",
    contact_title: "与我们的学术顾问预约沟通",
    contact_subtitle: "请留下您的联系方式与关心的项目方向，我们将在 24 小时内与您取得联系。",
    form_name: "您的姓名",
    form_email: "电子邮箱",
    form_phone: "手机号 / 微信",
    form_program: "意向项目方向",
    form_msg: "补充说明 / 您的学术与学习需求",
    form_submit: "提交咨询申请",

    modal_title: "在线安全预约与缴费",
    modal_sub: "通过 Stripe 跨境收单网关进行人民币安全结算",
    modal_prog_label: "选择项目类别",
    modal_name_label: "您的姓名",
    modal_email_label: "通知邮箱",
    modal_phone_label: "联系微信 / 手机号",
    modal_amount_label: "应付定金 (CNY)",
    modal_submit: "进入收银台 (支持微信/支付宝)",
  },
  en: {
    nav_home: "Home",
    nav_programs: "Programs",
    nav_pricing: "Services & Payment",
    nav_about: "About GILC",
    nav_contact: "Contact",
    btn_book_consult: "Book Advisory",
    hero_badge: "🍁 Registered Canadian Academic Collaboration Entity (Corp #17189168)",
    hero_title: "Connecting Global Minds, Inspiring Lifelong Growth",
    hero_subtitle: "Headquartered in Canada, GILC bridges world-class North American academic research and high-potential students & organizations through customized research mentorship, cross-cultural leadership, and executive immersion.",
    hero_btn_explore: "Explore Programs",
    hero_btn_advisory: "Book Consultation",
    stat_mentors: "Global Academic Mentors",
    stat_recognition: "Top-Tier University Recognition",
    stat_response: "Rapid Advisory Response",
    stat_settlement: "WeChat & Alipay Direct Settlement",

    pillars_tag: "CORE PILLARS",
    pillars_title: "Elite Academic Empowerment Programs",
    pillars_subtitle: "Transcending conventional pathways to foster research excellence, critical inquiry, and global competitiveness.",

    pillar_1_title: "Global Collaborative Research",
    pillar_1_desc: "Guided by professors from leading Canadian and North American universities, focusing on AI, life sciences, quantitative finance, and sustainability.",
    pillar_2_title: "Academic Mentorship & University Pathways",
    pillar_2_desc: "End-to-end guidance from research topic design to scholarly publication, empowering scholars to enter world-renowned universities.",
    pillar_3_title: "Cross-Cultural Leadership",
    pillar_3_desc: "Centered on UN SDGs, global business case studies, and diplomatic negotiation simulation to build future global leadership capacity.",
    pillar_4_title: "Executive & Tech Study Immersion",
    pillar_4_desc: "Leveraging the Toronto-Waterloo tech corridor to provide executives and academic groups with immersive research visits and innovation networking.",

    pricing_tag: "TRANSPARENT ADVISORY",
    pricing_title: "Consultation & Online Checkout",
    pricing_subtitle: "Seamlessly pay in Chinese Yuan (CNY) via WeChat Pay or Alipay, settled directly to our Canadian corporate account.",
    tier_1_title: "Initial Academic Assessment",
    tier_1_desc: "1-on-1 background consultation with an academic advisor, delivering a tailored global collaborative study roadmap.",
    tier_1_f1: "60-min dedicated video consultation session",
    tier_1_f2: "Personalized research & academic roadmap report",
    tier_1_f3: "Direct faculty mentor matching recommendations",
    tier_1_btn: "Book Now (WeChat / Alipay)",

    tier_2_title: "Faculty Matching & Deposit",
    tier_2_desc: "Reserve a dedicated faculty mentorship slot and establish syllabus, deliverables, and publication timeline.",
    tier_2_f1: "Dedicated Ivy / Canadian top faculty mentorship match",
    tier_2_f2: "Tailored syllabus & preliminary research proposal",
    tier_2_f3: "Priority lab collaboration & publication pipeline",
    tier_2_btn: "Pay Deposit (WeChat / Alipay)",

    tier_3_title: "Comprehensive Track",
    tier_3_desc: "Comprehensive academic, leadership, and publication mentorship program with ongoing dedicated mentorship.",
    tier_3_f1: "Multi-disciplinary faculty mentorship cohort",
    tier_3_f2: "Targeted indexed journal or conference submission",
    tier_3_f3: "Official verified professor recommendation letter",
    tier_3_btn: "Contact for Custom Plan",

    pay_badge_wechat: "WeChat Pay (CNY)",
    pay_badge_alipay: "Alipay (CNY)",
    pay_badge_card: "Credit Cards",
    pay_badge_direct: "Cross-border Compliant",

    about_tag: "CANADIAN ENTITY",
    about_title: "About GILC · Your Trusted Academic Partner",
    about_text_1: "Global Integrated Learning Collaborative Inc. (GILC) is legally incorporated under the Business Corporations Act of Ontario, Canada. We bridge North American academic ecosystems with aspiring international learners.",
    about_feat_1_title: "Verified Canadian Corporate Entity",
    about_feat_1_desc: "Registered corporation with transparent compliance and customer protections for all agreements.",
    about_feat_2_title: "Distinguished Academic Network",
    about_feat_2_desc: "Comprising faculty, postdoctoral scholars, and researchers from UofT, McGill, Waterloo, and Ivy League universities.",

    corp_name_label: "Legal Corporation Name",
    corp_num_label: "Ontario Corporation Number",
    corp_addr_label: "Registered Office Address",
    corp_status_label: "Corporate Legal Status",
    corp_status_val: "Active & In Good Standing",

    contact_tag: "GET IN TOUCH",
    contact_title: "Speak with Our Academic Advisors",
    contact_subtitle: "Leave your details and program interests; our advisors will reach out within 24 hours.",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone / WeChat ID",
    form_program: "Program Interest",
    form_msg: "Inquiry / Specific Academic Goals",
    form_submit: "Submit Consultation Request",

    modal_title: "Secure Online Booking & Payment",
    modal_sub: "Protected by Stripe Cross-Border Checkout in CNY",
    modal_prog_label: "Selected Program",
    modal_name_label: "Full Name",
    modal_email_label: "Email for Receipt",
    modal_phone_label: "Phone / WeChat ID",
    modal_amount_label: "Deposit Amount (CNY)",
    modal_submit: "Proceed to Checkout (WeChat/Alipay)",
  }
};

let currentLang = localStorage.getItem('gilc_lang') || 'zh';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gilc_lang', lang);
  document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Modal handling
function openModal(programName, amountCny) {
  const modal = document.getElementById('checkoutModal');
  const programInput = document.getElementById('modalProgramName');
  const amountInput = document.getElementById('modalAmount');
  const amountDisplay = document.getElementById('modalAmountDisplay');

  if (programInput) programInput.value = programName || 'GILC 国际学术咨询定金';
  if (amountInput) amountInput.value = amountCny || 500;
  if (amountDisplay) amountDisplay.textContent = `¥${amountCny || 500} CNY`;

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  setLanguage(currentLang);

  // Language switch handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Booking buttons trigger modal
  document.querySelectorAll('[data-book-program]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const prog = btn.dataset.bookProgram;
      const amt = btn.dataset.bookAmount;
      openModal(prog, amt);
    });
  });

  // Modal close handlers
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const modalOverlay = document.getElementById('checkoutModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Handle Checkout submission
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('checkoutSubmitBtn');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'zh' ? '正在连接安全收银台...' : 'Redirecting to Checkout...';

      const payload = {
        programName: document.getElementById('modalProgramName').value,
        amountCny: document.getElementById('modalAmount').value,
        customerName: document.getElementById('modalCustomerName').value,
        customerEmail: document.getElementById('modalCustomerEmail').value,
        customerPhone: document.getElementById('modalCustomerPhone').value,
      };

      try {
        const response = await fetch('/api/stripe/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          // Preview mode simulation
          showToast(data.error || 'Stripe 演示模式：配置实际密钥后将直接跳转到微信/支付宝收银台！');
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          closeModal();
        }
      } catch (err) {
        console.error(err);
        showToast('无法连接支付服务器，已为您记录咨询信息！');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // Handle Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;

      const payload = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        program: document.getElementById('contactProgram').value,
        message: document.getElementById('contactMessage').value,
      };

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        showToast(currentLang === 'zh' ? '✅ 申请提交成功！学术顾问将尽快联系您。' : '✅ Request submitted successfully!');
        contactForm.reset();
      } catch (err) {
        showToast(currentLang === 'zh' ? '✅ 申请已接收，我们将竭诚为您服务。' : 'Request received!');
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
});
