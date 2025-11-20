# Switching Coolify from Static Site to Dockerfile

## The Problem

Coolify's "Static Site" mode generates its own Dockerfile that just copies files without building. This means the Storybook build never runs, and you get a blank page.

## The Solution

Switch your Coolify resource from "Static Site" to "Docker Compose" or "Dockerfile" mode to use the included Dockerfile that properly builds Storybook.

## Steps to Switch

### Option A: Edit Existing Resource (Recommended)

1. **Go to your Coolify dashboard**
2. **Navigate to your resource** (the one showing blank page)
3. **Click "Settings" or "Edit"**
4. **Change Resource Type:**
   - Look for "Resource Type" or "Type" setting
   - Change from **"Static Site"** to **"Docker Compose"** or **"Dockerfile"**
5. **Save the changes**
6. **Redeploy**

Coolify will now use the Dockerfile in your repository root, which:
- Builds Storybook in a Node.js container
- Copies the built files to nginx
- Serves the site properly

### Option B: Create New Resource

If you can't change the resource type:

1. **Create a new resource** in Coolify
2. **Select "Docker Compose" or "Dockerfile"** as the type
3. **Connect the same Git repository**
4. **Set port to `80`**
5. **Deploy**

The Dockerfile will be auto-detected from the repository root.

## Verification

After switching and redeploying, check the build logs. You should see:

```
# Stage 1: Build Storybook
FROM node:18-alpine AS builder
...
RUN npm ci --only=production=false
...
RUN npm run build-storybook
...
# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/Frontend/storybook-static /usr/share/nginx/html
```

If you see these steps, the build is running correctly!

## What the Dockerfile Does

1. **Stage 1 (Builder):**
   - Uses Node.js 18 Alpine image
   - Installs npm dependencies
   - Builds Storybook static files

2. **Stage 2 (Server):**
   - Uses nginx Alpine image
   - Copies built files from Stage 1
   - Serves with optimized nginx config

## After Switching

Once you've switched and redeployed:
- The site should load correctly
- All components should be accessible
- Copy/paste functionality should work
- Navigation should work properly

## Troubleshooting

**Still seeing blank page?**
- Check Docker build logs in Coolify
- Verify the build stage completed (look for "npm run build-storybook" in logs)
- Check container logs for nginx errors

**Build fails?**
- Ensure Docker has enough resources (memory/CPU)
- Check that Node.js dependencies install correctly
- Verify the Dockerfile is in the repository root

---

**Note:** The Dockerfile approach is more reliable because it guarantees the build step always runs, unlike the static site mode which may skip it.

