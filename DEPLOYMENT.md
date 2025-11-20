# Deployment Guide - Component Library to Coolify VPS

This guide walks you through deploying the Storybook component library to your Coolify VPS as a static site.

## Overview

The component library uses Storybook to build a static website that showcases all frontend and backend components. This static site can be easily deployed to Coolify and served to users for browsing and copying component code.

## Prerequisites

- Coolify VPS instance running Ubuntu
- Git repository with the component library code
- Domain name (optional, but recommended for SSL)

## Build Process

Storybook builds to a static site using the following command:
```bash
cd Frontend && npm install && npm run build-storybook
```

This creates a `storybook-static` directory in the `Frontend` folder containing all the HTML, CSS, and JavaScript files needed to serve the component library.

## Coolify Configuration

### Step 1: Create New Resource

1. Log into your Coolify dashboard
2. Navigate to your project/server
3. Click **"New Resource"** or **"Add Resource"**
4. Select **"Static Site"** as the resource type

### Step 2: Connect Git Repository

1. In the resource configuration, connect your Git repository
2. Select the branch you want to deploy (typically `main` or `master`)
3. Enable **"Automated Deployments"** if you want automatic updates on push

### Step 3: Configure Build Settings

In the build configuration section, enter the following:

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
(Leave as default for static sites)

### Step 4: Configure Domain (Optional)

1. In the domain configuration section:
   - Enter your domain or subdomain (e.g., `components.yourdomain.com`)
   - Enable **SSL/HTTPS** (recommended)
   - Coolify will automatically set up Let's Encrypt SSL certificate

### Step 5: Deploy

1. Click **"Deploy"** or **"Save and Deploy"**
2. Coolify will:
   - Clone your repository
   - Install dependencies
   - Run the build command
   - Serve the static files
   - Set up SSL (if domain configured)

## Quick Reference

For quick copy-paste values, see [COOLIFY_SETUP.md](./COOLIFY_SETUP.md)

## Build Output

After a successful build, the following directory structure is created:

```
Frontend/
└── storybook-static/
    ├── index.html
    ├── assets/
    │   ├── *.js
    │   ├── *.css
    │   └── *.json
    └── ...
```

Coolify will serve files from the `Frontend/storybook-static` directory.

## Automated Deployments

With automated deployments enabled:
- Every push to your configured branch triggers a new deployment
- Coolify automatically runs the build process
- The site updates with the latest component changes
- No manual intervention needed

## Environment Variables

No environment variables are required for basic Storybook deployment. The build process is self-contained.

## Troubleshooting

### Build Fails

**Issue:** Build command fails with npm errors

**Solution:**
- Ensure Node.js 18+ is available in Coolify's build environment
- Check that all dependencies are listed in `package.json`
- Verify the build command path is correct: `cd Frontend && npm install && npm run build-storybook`

### Output Directory Not Found

**Issue:** Coolify can't find the output directory

**Solution:**
- Verify the output directory path: `Frontend/storybook-static`
- Ensure the build completes successfully (check build logs)
- The directory is created during the build process

### Components Not Loading

**Issue:** Components appear broken or don't load

**Solution:**
- Check browser console for errors
- Verify all assets are being served correctly
- Ensure the build completed without errors
- Check that the base path is correct (should be `/` for root domain)

### SSL Certificate Issues

**Issue:** SSL certificate not generating

**Solution:**
- Verify domain DNS is pointing to your VPS
- Ensure port 80 and 443 are open
- Check that the domain is accessible
- Wait a few minutes for Let's Encrypt to process

### Build Takes Too Long

**Issue:** Build process is slow

**Solution:**
- This is normal for the first build (installing dependencies)
- Subsequent builds are faster (dependencies cached)
- Consider using Coolify's build cache if available

## Testing Locally

Before deploying, test the build locally:

```bash
cd Frontend
npm install
npm run build-storybook
```

This creates the `storybook-static` directory. You can test it locally:

```bash
# Using Python
cd storybook-static
python -m http.server 8000

# Or using Node.js http-server
npx http-server storybook-static -p 8000
```

Then visit `http://localhost:8000` to verify everything works.

## What Gets Deployed

The deployed site includes:
- **Frontend Components**: All React UI components with interactive examples
- **Backend Components**: Code examples for all backend middleware and utilities
- **Copy/Paste Functionality**: One-click code copying for all examples
- **Component Documentation**: Full documentation for each component
- **Search and Navigation**: Easy browsing of all components

## Updating the Deployment

To update the deployed site:
1. Make changes to components or stories
2. Commit and push to your Git repository
3. Coolify automatically detects the push (if automated deployments enabled)
4. New build is triggered
5. Site updates automatically

## Performance

- Static site = fast loading times
- No server-side processing needed
- Can be cached by CDN
- Works well with Coolify's static site serving

## Security

- Static site = minimal attack surface
- No server-side code execution
- SSL/HTTPS recommended for production
- All code is client-side only

## Support

If you encounter issues:
1. Check the build logs in Coolify
2. Verify the build works locally
3. Review the troubleshooting section above
4. Check Coolify documentation for static site deployment

---

**Note:** This deployment creates a public-facing website where users can browse and copy component code. Ensure your repository doesn't contain sensitive information if it's public.

