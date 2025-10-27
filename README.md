# 🚀 Lorenzo Dastoli - Portfolio 2025

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, optimized performance, and a clean design showcasing my projects and blog posts.

## vercel
https://portfolio2025-eh00spew8-loozioloozs-projects.vercel.app/

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Built with Core Web Vitals in mind
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📝 **Blog System** - MDX-powered blog with reading time estimates
- 🎯 **SEO Friendly** - Optimized meta tags and semantic HTML
- 🌙 **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Content:** MDX for blog posts
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Montserrat + Hind)

## 📁 Project Structure

```
portfolio2025/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📂 blog/              # Blog pages
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage
│   ├── 📂 components/            # React components
│   │   ├── 📂 blog/              # Blog-related components
│   │   ├── 📂 sections/          # Page sections
│   │   └── 📂 ui/                # Reusable UI components
│   ├── 📂 data/                  # Static data files
│   │   ├── consts.ts             # Constants and configuration
│   │   └── projects.json         # Projects data
│   ├── 📂 lib/                   # Utility functions
│   │   └── blog.ts               # Blog utilities
│   └── 📂 types/                 # TypeScript definitions
├── 📂 public/                    # Static assets
│   ├── 📂 images/                # Project images
│   └── 📂 blog/                  # Blog images
├── 📂 content/                   # MDX blog posts
│   └── 📂 posts/
└── 📄 Configuration files
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm (recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio2025.git
cd portfolio2025
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Start development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Personal Information

Update your personal details in `src/data/consts.ts`:

```typescript
export const HERO_CONTENT = {
  greeting: "Hi, I'm Your Name",
  title: "Your Title",
  description: "Your description...",
  profileImage: "/public/profile.png",
};
```

### 2. Color Scheme

Modify the color palette in `src/data/consts.ts`:

```typescript
export const COLORS = {
  primary: '#D97D55',    // Your primary color
  secondary: '#F4E9D7',  // Your secondary color
  accent: '#B8C4A9',     // Your accent color
  teal: '#6FA4AF',       // Your teal color
  // ... other colors
};
```

### 3. Navigation Menu

Update navigation items in `src/data/consts.ts`:

```typescript
export const MENUITEMS = [
  { title: 'Your Section', path: '#your-section' },
  // Add or modify menu items
];
```

### 4. Projects

Edit your projects in `src/data/projects.json`:

```json
{
  "projects": [
    {
      "id": 1,
      "name": "Your Project Name",
      "image": "/images/your-project.png",
      "tags": ["React", "TypeScript"],
      "description": "Your project description",
      "netlify": "https://your-live-site.com",
      "github": "https://github.com/you/your-repo"
    }
  ]
}
```

### 5. Blog Posts

Create MDX files in `content/posts/`:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-01"
excerpt: "A brief description of your post"
image: "/blog/your-image.jpg"
tags: ["tag1", "tag2"]
author: "Your Name"
---

# Your Blog Content

Write your blog content here using MDX syntax.
```

### 6. Images

- **Profile Image:** Replace `public/images/profile.png`
- **Project Images:** Add to `public/images/`
- **Blog Images:** Add to `public/blog/`

**💡 Image Optimization Tips:**
- Use WebP/AVIF formats when possible
- Optimize images before uploading (use tools like TinyPNG)
- Keep file sizes under 500KB for better performance

## 🚀 Deployment on Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts**
   - Set up project name
   - Configure settings
   - Deploy to production

### Environment Variables (if needed)

If you add environment variables, configure them in Vercel:

1. Go to your project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables

## 📈 Performance Best Practices

### 🖼️ Image Optimization

```typescript
// Always use Next.js Image component
import Image from 'next/image';

// Add priority to above-the-fold images
<Image
  src="/images/hero.jpg"
  alt="Description"
  priority // For LCP optimization
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### ⚡ Performance Monitoring

1. **Add Vercel Analytics**
```typescript
// In app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

2. **Monitor Core Web Vitals**
   - Use Vercel's built-in analytics
   - Run Lighthouse audits regularly
   - Monitor PageSpeed Insights

### 🎯 SEO Optimization

```typescript
// Update metadata in app/layout.tsx
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your SEO description",
  keywords: ["your", "keywords"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Your description",
    images: ["/images/og-image.jpg"],
  },
};
```

## 🔧 Development Tips

### Code Organization

- Keep components small and focused
- Use TypeScript interfaces for props
- Organize imports (external → internal → relative)
- Use meaningful component and file names

### Performance Tips

```typescript
// Use React.memo for expensive components
import { memo } from 'react';

const ProjectCard = memo(({ project }) => {
  // Component logic
});

// Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

### Animation Guidelines

```typescript
// Keep animations smooth and purposeful
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 } // Not too fast, not too slow
};
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `pnpm build`
   - Ensure all imports are correct
   - Verify image paths exist

2. **Performance Issues**
   - Optimize images (convert to WebP)
   - Check bundle size: `pnpm build && pnpm analyze`
   - Remove unused dependencies

3. **Styling Issues**
   - Clear Tailwind cache: `pnpm build`
   - Check for conflicting CSS
   - Verify Tailwind classes are correct

### Getting Help

- 📚 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 🎭 [Framer Motion Docs](https://www.framer.com/motion/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, consider sharing them back with the community.

---

**Built with ❤️ by Lorenzo Dastoli**

*Happy coding! 🚀*