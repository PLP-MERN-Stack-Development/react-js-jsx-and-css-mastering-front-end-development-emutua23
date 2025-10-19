# 🚀 Deployment Guide

Complete guide to deploy your Weather Dashboard application to various platforms.

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deploy to Vercel](#deploy-to-vercel-recommended)
3. [Deploy to Netlify](#deploy-to-netlify)
4. [Deploy to GitHub Pages](#deploy-to-github-pages)
5. [Deploy to Render](#deploy-to-render)
6. [Environment Variables](#environment-variables)
7. [Post-Deployment](#post-deployment)
8. [Troubleshooting](#troubleshooting)

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Application runs locally without errors
- [ ] All features tested and working
- [ ] Production build works: `npm run build`
- [ ] `.env` file NOT committed to Git
- [ ] API key is valid and working
- [ ] All dependencies in `package.json`
- [ ] Repository pushed to GitHub

**Test Production Build Locally:**
```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4173/` to test.

---

## 🟢 Deploy to Vercel (Recommended)

**Why Vercel?**
- ✅ Easiest deployment
- ✅ Automatic HTTPS
- ✅ Free tier generous
- ✅ Perfect for React apps
- ✅ Environment variables easy to manage

### Method 1: Vercel CLI (Terminal)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login
```bash
vercel login
```
- Select your login method (GitHub, Email, etc.)
- Complete authentication

#### Step 3: Deploy
```bash
# From project root directory
vercel
```

Answer the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? Press Enter (uses folder name)
- In which directory is your code located? **./**

#### Step 4: Add Environment Variables
```bash
vercel env add VITE_WEATHER_API_KEY
```
- Paste your API key when prompted
- Select environment: **Production, Preview, Development**

#### Step 5: Deploy to Production
```bash
vercel --prod
```

**Done!** Your app is live! 🎉

Copy the production URL and add it to your README.md

---

### Method 2: Vercel Dashboard (Web Interface)

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Import Project
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Click **"Import"**

#### Step 3: Configure Project
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

#### Step 4: Add Environment Variables
1. Click **"Environment Variables"**
2. Add:
   - **Name:** `VITE_WEATHER_API_KEY`
   - **Value:** Your API key
3. Select: Production, Preview, Development

#### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes
3. Visit your live site!

---

## 🔵 Deploy to Netlify

### Method 1: Drag and Drop

#### Step 1: Build Project
```bash
npm run build
```

#### Step 2: Deploy
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the `dist` folder
3. Wait for deployment
4. Your site is live!

#### Step 3: Add Environment Variables
1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add:
   - **Key:** `VITE_WEATHER_API_KEY`
   - **Value:** Your API key
4. Click **"Save"**

#### Step 4: Redeploy
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

---

### Method 2: Netlify CLI

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login
```bash
netlify login
```

#### Step 3: Initialize
```bash
netlify init
```

Follow prompts:
- Create & configure a new site
- Choose your team
- Site name (optional)
- Build command: `npm run build`
- Deploy directory: `dist`

#### Step 4: Deploy
```bash
netlify deploy --prod
```

---

### Method 3: Continuous Deployment (Git)

#### Step 1: Connect Repository
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to Git provider (GitHub)
4. Select your repository

#### Step 2: Configure Build Settings
- **Branch to deploy:** main
- **Build command:** `npm run build`
- **Publish directory:** `dist`

#### Step 3: Add Environment Variables
1. Click **"Show advanced"**
2. **"New variable"**
   - Key: `VITE_WEATHER_API_KEY`
   - Value: Your API key

#### Step 4: Deploy
1. Click **"Deploy site"**
2. Wait for build to complete
3. Site is live!

**Auto-Deploy:** Every push to main branch auto-deploys!

---

## 📘 Deploy to GitHub Pages

#### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json
Add to `package.json`:
```json
{
  "homepage": "https://<your-username>.github.io/<repo-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace:
- `<your-username>` with your GitHub username
- `<repo-name>` with your repository name

#### Step 3: Update vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<repo-name>/',
  plugins: [react()],
})
```

#### Step 4: Deploy
```bash
npm run deploy
```

#### Step 5: Enable GitHub Pages
1. Go to your GitHub repository
2. **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** / **root**
5. Save

**Note:** GitHub Pages doesn't support environment variables well. Consider other platforms for production apps with API keys.

---

## 🟣 Deploy to Render

#### Step 1: Push to GitHub
```bash
git push origin main
```

#### Step 2: Create New Static Site
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository

#### Step 3: Configure
- **Name:** weather-dashboard
- **Branch:** main
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

#### Step 4: Add Environment Variables
1. Click **"Advanced"**
2. Add environment variable:
   - Key: `VITE_WEATHER_API_KEY`
   - Value: Your API key

#### Step 5: Create Static Site
Click **"Create Static Site"**

Wait for deployment (2-3 minutes)

---

## 🔐 Environment Variables

### What Are They?
Environment variables store sensitive information like API keys that shouldn't be in your code.

### How to Add Them

**Vercel:**
```bash
vercel env add VITE_WEATHER_API_KEY
```
Or via dashboard: Settings → Environment Variables

**Netlify:**
Site settings → Environment variables → Add a variable

**Render:**
During setup: Advanced → Environment Variables

**Important:**
- Variable name: `VITE_WEATHER_API_KEY` (must start with `VITE_`)
- Never commit `.env` file to Git
- After adding variables, redeploy

---

## ✅ Post-Deployment

### 1. Test Your Deployed Site

Visit your live URL and test:
- [ ] Home page loads
- [ ] Can search for cities
- [ ] Weather data displays
- [ ] Navigation works
- [ ] Favorites work
- [ ] Temperature toggle works
- [ ] Responsive on mobile (test on phone)
- [ ] No console errors (F12 → Console)

### 2. Update README.md

Add your deployment URL:
```markdown
## 🚀 Demo

**Live Demo:** https://your-app-url.vercel.app
```

### 3. Commit and Push
```bash
git add README.md
git commit -m "Add deployment URL to README"
git push origin main
```

### 4. Share Your Link

Copy your live URL to submit in:
- GitHub Classroom
- Assignment submission form
- Course platform

---

## 🐛 Troubleshooting

### Issue: Build Fails

**Check:**
1. Does `npm run build` work locally?
2. Are all dependencies in `package.json`?
3. Any console errors?

**Fix:**
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

### Issue: Blank Page After Deploy

**Causes:**
1. Wrong base path (GitHub Pages)
2. Missing environment variables
3. Build errors

**Fix:**
1. Check browser console (F12)
2. Verify environment variables are set
3. Check deployment logs for errors

---

### Issue: API Not Working in Production

**Check:**
1. Environment variable added?
2. Variable name correct? `VITE_WEATHER_API_KEY`
3. API key valid?
4. Redeploy after adding variables

**Fix:**
```bash
# For Vercel
vercel env add VITE_WEATHER_API_KEY
vercel --prod

# For Netlify
# Add via dashboard, then redeploy
```

---

### Issue: 404 on Refresh

**Cause:** SPA routing not configured

**Fix for Netlify:**
Create `public/_redirects`:
```
/*    /index.html   200
```

**Fix for Vercel:**
Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

### Issue: Slow Loading

**Optimize:**
1. Lazy load routes
2. Optimize images
3. Enable gzip compression
4. Use CDN (most platforms do this automatically)

---

## 📊 Comparison Table

| Platform | Difficulty | Free Tier | Custom Domain | Auto Deploy | Best For |
|----------|-----------|-----------|---------------|-------------|----------|
| **Vercel** | ⭐ Easy | Generous | ✅ Yes | ✅ Yes | React apps |
| **Netlify** | ⭐ Easy | Good | ✅ Yes | ✅ Yes | Static sites |
| **GitHub Pages** | ⭐⭐ Medium | Free | ✅ Yes | ✅ Yes | Simple sites |
| **Render** | ⭐⭐ Medium | Limited | ✅ Yes | ✅ Yes | Full-stack |

**Recommendation:** Use **Vercel** for this project.

---

## 🎉 Success!

Your Weather Dashboard is now live! 

**Next Steps:**
1. Share your link
2. Test thoroughly
3. Get feedback
4. Make improvements
5. Deploy updates (automatic with Git-connected deploys)

---

## 📝 Deployment Checklist for Submission

- [ ] Application deployed successfully
- [ ] All features working in production
- [ ] Environment variables configured
- [ ] Tested on mobile and desktop
- [ ] No console errors
- [ ] Deployment URL added to README.md
- [ ] Repository updated with latest code
- [ ] Deployment URL submitted to instructor

---

**Need More Help?**
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/
- GitHub Pages Docs: https://docs.github.com/pages

Happy Deploying! 🚀
