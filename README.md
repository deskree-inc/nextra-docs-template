# Deskree Nextra Documentation Template

A production-ready documentation template built with [Nextra](https://nextra.site/), [Next.js 15](https://nextjs.org), and [Tailwind CSS 4](https://tailwindcss.com). Create beautiful, fast, and SEO-friendly documentation sites in minutes.

## ✨ Features

- 🎨 **Beautiful Dark Mode** - Seamless light/dark theme switching
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- ⚡ **Lightning Fast** - Built on Next.js 15 with Turbopack
- 🎯 **SEO Optimized** - Meta tags, OpenGraph, and sitemap
- 🔍 **Full-Text Search** - Built-in search powered by Nextra
- 📝 **MDX Support** - Write docs with React components
- 🎭 **TypeScript** - Full type safety and IntelliSense
- 🎨 **Tailwind CSS 4** - Modern utility-first styling
- 🧭 **Auto Navigation** - Sidebar generated from file structure

## 🚀 Quick Start

### Using This Template

1. **Click "Use this template"** button on GitHub (or clone this repo)

2. **Clone your new repository:**
   ```bash
   git clone https://github.com/YOUR_ORG/YOUR_DOCS_REPO.git
   cd YOUR_DOCS_REPO
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🎨 Customization

### 1. Update Branding

Edit `theme.config.tsx`:

```tsx
const config = {
  logo: <span>Your Project Name</span>,
  project: {
    link: "https://github.com/your-org/your-repo",
  },
  footer: {
    text: "© 2025 Your Company. All rights reserved.",
  },
};
```

### 2. Update Site Metadata

Edit `src/app/layout.tsx`:

```tsx
export const metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    template: "%s - Your Docs",
  },
  description: "Your project description",
};
```

### 3. Add Your Logo

- Replace logo files in `public/`
- Update the logo component in `theme.config.tsx`

### 4. Customize Styles

Edit `src/app/globals.css` for custom styling

## 📝 Creating Documentation

### Add Pages

Create MDX files in `src/app/`:

```mdx
# Page Title

Your content here...

## Section

More content with [links](https://example.com)

\`\`\`tsx
// Code examples with syntax highlighting
function hello() {
  return "world";
}
\`\`\`
```

### Organize with Folders

```
src/app/
├── page.mdx              # Homepage
├── getting-started/
│   ├── page.mdx
│   └── installation.mdx
└── guides/
    ├── page.mdx
    └── advanced.mdx
```

## 📁 Project Structure

```
├── public/                  # Static assets
├── src/
│   ├── app/                # Documentation pages (MDX)
│   │   ├── page.mdx       # Homepage
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   ├── components/         # React components
│   └── mdx-components.tsx  # MDX config
├── theme.config.tsx        # Nextra theme config
├── next.config.mjs         # Next.js config
└── package.json
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

Works with Netlify, AWS Amplify, Cloudflare Pages, or self-hosted.

## 🛠️ Scripts

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Start production server
```

## 📦 Tech Stack

- [Next.js 15](https://nextjs.org)
- [Nextra 4](https://nextra.site)
- [Tailwind CSS 4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [MDX](https://mdxjs.com)

## 📚 Resources

- [Nextra Docs](https://nextra.site/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

## 📄 License

MIT License - see LICENSE file

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/deskree-inc/nextra-docs-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/deskree-inc/nextra-docs-template/discussions)

---

**Made with ❤️ by [Deskree](https://deskree.com)**

