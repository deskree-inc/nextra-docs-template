# GitHub Template Repository Setup

## 📝 Quick Setup Instructions

Your Nextra documentation template is ready! Follow these steps to push it to GitHub and make it available as a template.

## 🚀 Steps

### 1. Create GitHub Repository

Go to: https://github.com/organizations/deskree-inc/repositories/new

Fill in:

- **Repository name**: `nextra-docs-template`
- **Description**: `Production-ready documentation template with Nextra, Next.js 15, and Tailwind CSS 4`
- **Visibility**: ✅ Public (required for template repositories)
- **Initialize**: ❌ DO NOT check any boxes (we already have files)

Click **"Create repository"**

### 2. Push to GitHub

Run these commands:

```bash
cd /Users/wellingtonprado/Projects/Deskree/nextra-docs-template

git remote add origin https://github.com/deskree-inc/nextra-docs-template.git

git push -u origin main
```

### 3. Enable Template Repository

1. Go to: https://github.com/deskree-inc/nextra-docs-template
2. Click **Settings** tab
3. Scroll to **Template repository** section
4. Check ✅ **"Template repository"**
5. Save

### 4. Add Repository Topics (Optional)

1. Go to repository homepage
2. Click ⚙️ gear icon next to "About"
3. Add topics:
   - `nextra`
   - `nextjs`
   - `documentation`
   - `template`
   - `tailwindcss`
   - `typescript`
   - `mdx`
4. Update description and website URL if desired
5. Save changes

## 🎉 Using the Template

Once set up, anyone can create a new docs site from your template:

1. Go to: https://github.com/deskree-inc/nextra-docs-template
2. Click **"Use this template"** (green button)
3. Choose **"Create a new repository"**
4. Fill in new repository details
5. Click **"Create repository"**

The new repository will have all template files ready to customize!

## ✅ What's Included

- ✨ Next.js 15 + Nextra 4
- 🎨 Tailwind CSS 4
- 🌙 Dark mode support
- 📱 Responsive design
- 🔍 Full-text search
- 📝 MDX support
- 🎯 SEO optimized
- 📦 Example pages
- 🛠️ TypeScript configured

## 📚 Documentation for Users

Users of the template should:

1. **Install dependencies**: `npm install`
2. **Update branding**: Edit `theme.config.tsx`
3. **Update metadata**: Edit `src/app/layout.tsx`
4. **Add logo**: Replace files in `public/`
5. **Create content**: Add MDX files in `src/app/`
6. **Deploy**: Push to Vercel or preferred platform

## 🔄 Future Updates

To update the template:

1. Make changes in local `nextra-docs-template` directory
2. Test locally: `npm install && npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update: description"
   git push
   ```

---

**Template created by [Deskree](https://deskree.com)** 🚀
