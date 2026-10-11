# Multi-stage lightweight production Dockerfile
FROM node:20-alpine AS runner

WORKDIR /app

# Install security updates
RUN apk --no-cache add ca-certificates

ENV NODE_ENV=production
ENV PORT=3000

# Copy dependency manifests
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev --ignore-scripts

# Copy application source and assets
COPY src/ ./src/
COPY public/ ./public/

EXPOSE 3000

# Use non-root node user for security
USER node

CMD ["node", "src/server.js"]
