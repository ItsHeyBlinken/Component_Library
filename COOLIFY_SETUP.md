# Coolify Setup - Quick Reference

Quick copy-paste values for configuring the Component Library in Coolify UI.

## Resource Type

**Option 1: Static Site** (recommended - simpler)
**Option 2: Dockerfile** (if Option 1 doesn't work - more reliable)

If the build command doesn't run with Option 1, use Option 2 with the included Dockerfile.

## Build Configuration

### Option 1: Static Site

**Build Command:**
```bash
cd Frontend && npm install && npm run build-storybook
```

**Output Directory:**
```
Frontend/storybook-static
```

**Port:**
```
80
```
(Default for static sites)

### Option 2: Dockerfile

**Resource Type:** Docker Compose or Dockerfile

**Dockerfile Location:** `./Dockerfile` (auto-detected)

**Port:**
```
80
```

No build command needed - Dockerfile handles everything.

## Deployment Settings

### Automated Deployments
- **Enable:** Yes (recommended)
- **Branch:** `main` or `master` (your default branch)

### Domain Configuration
- **Domain:** Your domain or subdomain (e.g., `components.yourdomain.com`)
- **SSL:** Enable (Let's Encrypt)
- **Force HTTPS:** Enable (recommended)

## Environment Variables

**None required** - Storybook build doesn't need environment variables.

## Quick Setup Checklist

### Option 1: Static Site
- [ ] Create new Static Site resource in Coolify
- [ ] Connect Git repository
- [ ] Set build command: `cd Frontend && npm install && npm run build-storybook`
- [ ] Set output directory: `Frontend/storybook-static`
- [ ] Set port: `80`
- [ ] Enable automated deployments
- [ ] Configure domain (optional but recommended)
- [ ] Enable SSL/HTTPS
- [ ] Deploy

### Option 2: Dockerfile (if Option 1 doesn't work)
- [ ] Create new Docker Compose or Dockerfile resource in Coolify
- [ ] Connect Git repository
- [ ] Verify Dockerfile is in repository root
- [ ] Set port: `80`
- [ ] Enable automated deployments
- [ ] Configure domain (optional but recommended)
- [ ] Enable SSL/HTTPS
- [ ] Deploy

## First Deployment

1. Click **"Deploy"** in Coolify
2. Wait for build to complete (first build takes longer)
3. Visit your domain to verify deployment
4. SSL certificate will be automatically generated

## Verification

After deployment, you should see:
- Storybook interface loads correctly
- All frontend components are accessible
- All backend components are accessible
- Copy/paste buttons work
- Navigation works correctly

## Troubleshooting Quick Fixes

**Build fails or doesn't run:**
- Check Node.js version (needs 18+)
- Verify build command path
- Check build logs in Coolify
- **If build doesn't run:** Switch to Option 2 (Dockerfile)

**404 errors or blank page:**
- Verify output directory: `Frontend/storybook-static` (Option 1)
- Check that build completed successfully
- Check Docker build logs (Option 2)
- Verify Dockerfile is in repository root (Option 2)

**SSL issues:**
- Verify DNS is pointing to VPS
- Wait a few minutes for certificate generation
- Check ports 80 and 443 are open

---

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

