# GVJ & Associates — Chartered Accountant Website

> A modern, responsive landing page for **Gajendra V. Jain & Associates LLP**, a professionally managed Chartered Accountancy firm established in 2011..


## ✨ Features

- ⚡ Built with **Next.js 15** (App Router) and **TypeScript**
- 🎨 Styled with **Tailwind CSS v4** — utility-first, no custom CSS overhead
- 🎯 **CSS Custom Properties** for all brand colors — change the entire palette from one place (`globals.css`)
- 📱 Fully **responsive** across mobile, tablet, and desktop
- 🖼️ Optimised images via `next/image`
- 🔤 **Geist** font family (Google Fonts, loaded via `next/font`)
- 🧩 Clean component architecture — one file per section
- ♿ Semantic HTML5 structure for accessibility and SEO

---

## 📁 Project Structure

```
chartered-accountant/
├── app/
│   ├── globals.css        # Brand color tokens & base styles
│   ├── layout.tsx         # Root layout (font, metadata)
│   └── page.tsx           # Main landing page — assembles all sections
├── components/
│   ├── Hero.tsx           # Hero banner with CTA buttons
│   ├── About.tsx          # Firm story & image section
│   ├── Counter.tsx        # Key stats strip (years, clients, services)
│   ├── Industries.tsx     # Industries served grid
│   ├── WhyChooseUs.tsx    # Differentiators + stat cards
│   ├── Testimonials.tsx   # Client testimonial cards
│   └── Footer.tsx         # Footer with links and contact info
├── public/
│   └── law.jpg            # Hero / About image
└── ...config files
```

---

## 🎨 Brand Color System

All colors are defined as CSS custom properties in `app/globals.css` and referenced throughout every component via `var()`. To rebrand the site, update only these variables:

```css
:root {
  --navy:   #1f4e79;   /* Primary dark blue */
  --orange: #f28c28;   /* Accent orange     */
  --black:  #000000;
  --white:  #ffffff;

  /* Pre-computed opacity variants */
  --navy-5:    rgb(31 78 121 / 0.05);
  --navy-10:   rgb(31 78 121 / 0.10);
  --navy-20:   rgb(31 78 121 / 0.20);
  --orange-30: rgb(242 140 40 / 0.30);
  --orange-60: rgb(242 140 40 / 0.60);
  --black-60:  rgb(0 0 0 / 0.60);
  --black-75:  rgb(0 0 0 / 0.75);
  --black-80:  rgb(0 0 0 / 0.80);
  --black-90:  rgb(0 0 0 / 0.90);
  --white-60:  rgb(255 255 255 / 0.60);
  --white-75:  rgb(255 255 255 / 0.75);
}
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Danssinia/CA-Website.git
cd CA-Website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

