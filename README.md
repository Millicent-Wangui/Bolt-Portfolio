# Millicent Wangui — Professional Portfolio

A modern, production-ready single-page application showcasing the professional experience, skills, and projects of Millicent Wangui Wachira, a CompTIA A+ certified IT Support professional.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-06B6D4)

## 🌟 Features

- **Modern Design System**: Clean, professional UI with a custom color palette and typography
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Performance Focused**: Optimized build with code splitting and lazy loading
- **Accessible**: WCAG AA compliant with semantic HTML and proper ARIA labels
- **Interactive Components**: Smooth animations and hover effects for enhanced user experience
- **Contact Form**: Functional contact form with validation and user feedback

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Sections Overview](#sections-overview)
- [Customization Guide](#customization-guide)
- [SEO & Analytics](#seo--analytics)
- [Deployment](#deployment)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [License](#license)

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/millicentwangui/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Landing section with CTA
│   │   ├── About.tsx       # Bio and key metrics
│   │   ├── Skills.tsx      # Technical skills display
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── Experience.tsx  # Professional timeline
│   │   ├── Education.tsx   # Education & certifications
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer with links
│   ├── data/
│   │   └── resume.ts       # Canonical resume data
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles & Tailwind
├── index.html              # HTML template with SEO tags
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

## 🛠 Technology Stack

### Core Technologies

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### UI & Icons

- **Lucide React 0.344.0** - Beautiful, consistent icons
- Custom color system with teal accent (`#0ea5a4`)
- Professional slate gray palette

### Development Tools

- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing
- **TypeScript ESLint** - TypeScript-specific linting

## 📄 Sections Overview

### 1. Hero Section (`#hero`)
- Full-screen landing with gradient background
- Name, headline, and professional summary
- Two primary CTAs: "Request a call" and "Download resume"
- Key metrics displayed at bottom

### 2. About Section (`#about`)
- Professional bio
- Three metric cards: Certifications, Tickets/Month, Staff Trained
- Hover effects and subtle animations

### 3. Skills Section (`#skills`)
- Three categorized skill groups:
  - IT Support (Teal theme)
  - Networking (Blue theme)
  - Tools & Systems (Amber theme)
- Interactive skill chips with hover states

### 4. Projects Section (`#projects`)
- Featured project: PestLords AI Chatbot
- Cards with dark theme and accent borders
- Links to GitHub and live demos
- Tech stack badges

### 5. Experience Section (`#experience`)
- Timeline design with connected dots
- Expandable job cards
- Impact metrics highlighted
- Location and date information

### 6. Education Section (`#education`)
- Degree card with honors
- Certification grid with status badges
- Completed vs. In Progress indicators

### 7. Contact Section (`#contact`)
- Contact information cards (email, phone, location)
- Functional contact form with validation
- Success state with feedback
- Privacy note included

### 8. Footer
- Quick navigation links
- Social media links (GitHub, LinkedIn)
- Contact information
- Back to top button
- Copyright notice

## 🎨 Customization Guide

### Update Resume Data

All content is centralized in `src/data/resume.ts`. Update this file to change:

- Personal information
- Experience and education
- Skills and certifications
- Projects
- Contact details

```typescript
export const resumeData = {
  person: {
    name: "Your Name",
    email: "your.email@example.com",
    // ... other fields
  },
  // ... rest of the data
};
```

### Modify Color Scheme

Primary colors are defined in the Tailwind configuration and components:

- **Primary**: `slate-900` (#0f172a)
- **Accent**: `teal-500` (#0ea5a4)
- **Highlight**: `amber-500` (#f59e0b)

To change the accent color, update all instances of `teal` in components to your preferred color.

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add corresponding anchor link to navigation

### Customize Typography

Typography is configured with Tailwind's default system font stack. To change fonts:

1. Import custom fonts in `index.html`
2. Update `tailwind.config.js` theme configuration
3. Apply new font families in components

## 🔍 SEO & Analytics

### Built-in SEO Features

- **Meta Tags**: Complete title, description, keywords
- **Open Graph**: Facebook and LinkedIn sharing
- **Twitter Cards**: Optimized Twitter previews
- **JSON-LD Schema**: Person and ProfessionalRole structured data
- **Canonical URL**: Prevents duplicate content issues
- **Semantic HTML**: Proper heading hierarchy and landmarks

### Adding Analytics

#### Google Analytics

Add to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Plausible Analytics (Privacy-friendly alternative)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Performance Targets

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Vercel auto-detects Vite configuration
4. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Manual Deployment

```bash
npm run build
```

Upload contents of `dist/` directory to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- DigitalOcean App Platform

### Environment Variables

No environment variables are required for the base portfolio. If you add backend functionality, create a `.env` file:

```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

## ⚡ Performance

### Optimization Features

- **Code Splitting**: React components lazy-loaded
- **Tree Shaking**: Unused code eliminated
- **Minification**: JavaScript and CSS minified
- **Compression**: Gzip compression enabled
- **Image Optimization**: Modern image formats recommended
- **CSS Purging**: Tailwind removes unused styles

### Build Output

Typical production build:
- HTML: ~3 KB (gzipped: ~1 KB)
- CSS: ~17 KB (gzipped: ~4 KB)
- JavaScript: ~177 KB (gzipped: ~54 KB)

### Performance Tips

1. **Images**: Use WebP format with JPEG fallback
2. **Fonts**: Use system fonts or preload custom fonts
3. **Icons**: Lucide React is tree-shakeable
4. **Analytics**: Load analytics scripts asynchronously

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

### Polyfills

Modern browsers are targeted. For older browser support, add polyfills:

```bash
npm install core-js regenerator-runtime
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are mobile-first and adapt gracefully to larger screens.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:

1. Open an issue describing the problem/suggestion
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## 📞 Contact

**Millicent Wangui Wachira**
- Email: wanguiwachira19@gmail.com
- Phone: 719-240-1070
- Location: DuPont, WA, USA
- GitHub: [github.com/millicentwangui](https://github.com/millicentwangui)
- LinkedIn: [linkedin.com/in/millicent-wangui](https://www.linkedin.com/in/millicent-wangui)

## 📄 License

Copyright © 2025 Millicent Wangui Wachira. All rights reserved.

This portfolio is for personal use. Feel free to use the code structure and design as inspiration for your own portfolio, but please don't use my personal information or content.

---

## 🎯 Next Steps

### Immediate
- [ ] Add real GitHub repository links to projects section
- [ ] Create and add project screenshots
- [ ] Generate resume PDF and add to `/public` directory
- [ ] Update social media profile URLs

### Future Enhancements
- [ ] Add blog section for technical articles
- [ ] Implement testimonials/recommendations
- [ ] Add project filtering by technology
- [ ] Create case studies for featured projects
- [ ] Add dark mode toggle
- [ ] Implement i18n for multiple languages
- [ ] Add animation library (Framer Motion)
- [ ] Create custom 404 page
- [ ] Add sitemap.xml generation
- [ ] Implement RSS feed for blog

### Backend Integration (Optional)
- [ ] Connect contact form to email service (SendGrid, AWS SES)
- [ ] Add analytics dashboard
- [ ] Implement view counter
- [ ] Add newsletter signup
- [ ] Create admin panel for content updates

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

*Last updated: November 2025*
