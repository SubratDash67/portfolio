# Subrat Dash — Portfolio

A production-ready Next.js portfolio showcasing ML systems engineering work, built with a focus on performance, accessibility, and technical craftsmanship.

## 🎯 Design Philosophy

- **Dark mode only**: Single coherent aesthetic without theme toggle complexity
- **Evidence-based presentation**: Skills shown through usage context, not arbitrary ratings
- **Hybrid architecture**: Single-page landing with deep-dive project pages
- **Performance-first**: Optimized bundles, static generation, minimal runtime overhead
- **Accessible by default**: Semantic HTML, ARIA labels, keyboard navigation

## 🛠 Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS custom properties)
- **Animation**: [Framer Motion 12](https://www.framer.com/motion/)
- **Language**: TypeScript 5
- **Fonts**: [Geist Sans & Mono](https://vercel.com/font)

## 📐 Design System

### Color Palette

```css
--background:         #0A0A0B   /* Page background */
--surface:            #141415   /* Cards, elevated elements */
--surface-elevated:   #1C1C1E   /* Hover states */
--border:             #2A2A2D   /* Subtle dividers */
--text-primary:       #FAFAFA   /* Headings */
--text-secondary:     #A1A1A6   /* Body text */
--text-muted:         #6B6B70   /* Captions */
--accent:             #6B8AFF   /* Links, highlights */
--accent-hover:       #8BA3FF   /* Hover state */
```

### Typography Scale

- **Base font size:** 16px (1rem)
- **Line heights:** Tight (1.2) for headings, Relaxed (1.625) for body
- **Spacing system:** 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- **Max content width:** 72rem (1152px)
- **Optimal prose width:** 42rem (672px)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with header/footer
│   │   ├── page.tsx            # Landing page (Hero, About, Projects, Skills, Contact)
│   │   ├── globals.css         # Design tokens & Tailwind config
│   │   └── projects/[id]/      # Dynamic project detail pages
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/             # Layout primitives
│   │   │   ├── Header.tsx      # Fixed navigation with scroll detection
│   │   │   ├── Footer.tsx      # Site footer with links
│   │   │   ├── Container.tsx   # Max-width wrapper (content/narrow/full)
│   │   │   ├── Section.tsx     # Vertical spacing wrapper
│   │   │   └── Grid.tsx        # Responsive grid system
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx        # Landing hero with CTA
│   │   │   ├── About.tsx       # Professional summary & education
│   │   │   ├── Projects.tsx    # Project grid
│   │   │   ├── ProjectDetail.tsx # Individual project page
│   │   │   ├── Skills.tsx      # Evidence-based skills display
│   │   │   └── Contact.tsx     # Contact cards & resume CTA
│   │   └── ui/                 # UI components
│   │       ├── ProjectCard.tsx # Project card with hover effects
│   │       └── ScrollProgress.tsx # Top scroll indicator
│   ├── data/
│   │   ├── portfolio.ts        # Single source of truth for content
│   │   └── navigation.ts       # Navigation menu items
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   └── lib/
│       └── utils.ts            # Utility functions (cn, etc.)
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

### Color Palette

```css
/* Dark mode foundation */
--background: #0A0A0B      /* Near-black base */
--surface: #141415         /* Elevated surfaces */
--surface-elevated: #1C1C1E

/* Accent */
--accent: #6B8AFF          /* Muted periwinkle blue */
--accent-hover: #8BA3FF
--accent-muted: rgba(107, 138, 255, 0.15)

/* Text */
--text-primary: #FAFAFA    /* High contrast */
--text-secondary: #A1A1A6  /* Standard content */
--text-muted: #6B6B70      /* De-emphasized */
```

### Typography

- **Base**: 16px (1rem), 4px spacing grid
- **Scale**: xs (12px) → 6xl (60px) with responsive breakpoints
- **Fonts**: Geist Sans (body), Geist Mono (code)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)

### Spacing

Consistent 4px base unit: `gap-4` (16px), `py-6` (24px), `mb-12` (48px)

## 📊 Data Management

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts):

```typescript
export const portfolioData = {
  identity: { /* name, roles, contact */ },
  summary: { /* headline, philosophy, focus areas */ },
  education: { /* degrees, timeline */ },
  skills: { /* languages, frameworks, systems */ },
  projects: [ /* project details with metadata */ ],
  training: [ /* certifications */ ],
};
```

**To update content**: Edit this single file. No component changes needed.

## 🔀 Routing

- **Landing page**: `/` (single-page sections)
- **Project details**: `/projects/[id]` (dynamically generated from data)
- **Static generation**: All routes pre-rendered at build time

## ⚡ Performance Optimizations

- **React Strict Mode**: Enabled for development safety
- **Package optimization**: Framer Motion tree-shaking
- **Static generation**: All pages pre-rendered (no SSR overhead)
- **Compressed responses**: Gzip enabled in production
- **Scroll animations**: `useInView` with `once: true` (no re-renders)
- **Font optimization**: `display: swap` for Geist fonts

## ♿ Accessibility

- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- **ARIA labels**: Navigation regions, icon buttons, social links
- **Keyboard navigation**: Focus visible states, tab order
- **Color contrast**: WCAG AA compliant (text on background)
- **Smooth scroll**: CSS `scroll-behavior` for anchor links

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Import repository in [Vercel Dashboard](https://vercel.com/new)
3. Framework: Auto-detected (Next.js)
4. Build command: `npm run build`
5. Deploy

### Other Platforms

- **Netlify**: Set build command to `npm run build`, publish directory to `.next`
- **Cloudflare Pages**: Same as Netlify
- **Self-hosted**: Run `npm run build && npm start` with Node.js server

## 📝 Customization Guide

### Adding a New Project

1. Open `src/data/portfolio.ts`
2. Add project object to `projects` array:

```typescript
{
  id: "unique-slug",
  title: "Project Title",
  tagline: "One-line description",
  description: "Full description",
  tech_stack: ["Python", "React"],
  links: { repo: "...", live: "..." },
  highlights: ["Achievement 1", "Achievement 2"],
  // ... see existing projects for full structure
}
```

3. Build will automatically generate `/projects/unique-slug` page

### Changing Color Scheme

Edit CSS custom properties in `src/app/globals.css`:

```css
:root {
  --accent: #YOUR_COLOR;  /* Primary accent color */
  --accent-hover: #HOVER_COLOR;
}
```

Tailwind classes (`bg-accent`, `text-accent`, etc.) update automatically.

### Modifying Layout

- **Container width**: Change `--max-width-content` in `globals.css`
- **Section spacing**: Edit `Section` component's `className` in `src/components/layout/Section.tsx`
- **Header height**: Adjust `h-16 md:h-20` in `Header.tsx`

## 📄 License

This project is open source and available for personal use. When adapting for your own portfolio:

1. Replace all content in `src/data/portfolio.ts`
2. Update metadata in `src/app/layout.tsx`
3. Customize color palette in `globals.css`
4. Modify design as needed

---

**Built with attention to craft** by [Subrat Dash](https://github.com/SubratDash67)
