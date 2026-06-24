# Mohammed Rayees — Portfolio

A world-class personal portfolio for **Mohammed Rayees** — Data Engineer · Analytics Engineer · AI Engineer.

Built with a modern engineering aesthetic inspired by Stripe, Vercel, Databricks and Linear.

## ✨ Features

- **Dark-mode** design with glassmorphism, gradients & glow effects
- **Hero** with animated typing role rotator, particle background & floating tech badges
- **Skills** with animated progress bars and hover spotlight cards
- **Projects** with a featured card, animated statistics and premium hover effects
- **Experience** timeline with achievements
- **GitHub** section with animated counters and live stat cards
- **Interactive architecture** roadmap (Data Sources → Airflow → dbt → Databricks → Warehouse → Power BI → GenAI)
- **Testimonials** & **Contact** (LinkedIn, GitHub, Email, WhatsApp)
- Scroll-reveal, staggered, hover-lift and mouse-follow spotlight animations
- Loading screen & smooth page transitions
- SEO optimized (metadata, JSON-LD, sitemap, robots, manifest)
- Fully responsive & accessibility conscious (reduced-motion support)

## 🧱 Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Shadcn-style UI** primitives
- **Lucide Icons**

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

## 🗂️ Structure

```
app/                 # App Router, layout, metadata, SEO routes
components/
  layout/            # Navbar, Footer
  sections/          # Hero, About, Skills, Projects, Experience, GitHub, Architecture, Testimonials, Contact
  shared/            # Reusable animation & effect components
  ui/                # Shadcn-style primitives (button, card, badge)
lib/
  data.ts            # Single source of truth for all content
  utils.ts           # cn() helper
public/              # Static assets (resume, etc.)
```

## ✏️ Editing Content

All copy, links, skills, projects and stats live in [`lib/data.ts`](./lib/data.ts).
Replace `public/resume.pdf` with the real résumé.

---

Built with Next.js, Tailwind & Framer Motion.
