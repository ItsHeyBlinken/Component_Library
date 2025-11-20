# Multi-stage build for Storybook static site
# Stage 1: Build Storybook
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY Frontend/package*.json ./Frontend/

# Install dependencies
WORKDIR /app/Frontend
RUN npm ci --only=production=false

# Copy source files
WORKDIR /app
COPY Frontend ./Frontend

# Build Storybook
WORKDIR /app/Frontend
RUN npm run build-storybook

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built Storybook files
COPY --from=builder /app/Frontend/storybook-static /usr/share/nginx/html

# Copy nginx configuration (if exists, otherwise use default)
COPY nginx.conf /etc/nginx/conf.d/default.conf 2>/dev/null || true

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

