# Om Badade — Product Management Portfolio

<p align="center">
  <strong>Product thinking. Business systems. Thoughtful execution.</strong><br />
  A personal portfolio showcasing work at the intersection of product management, analytics, and technology.
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" alt="Deployable on Vercel" /></a>
</p>

## About

This is the source code for [Om Badade’s portfolio](https://github.com/OmSantoshBadade/Om-Badade-PM-Portfolio), a personal website for presenting product, business analysis, and technology work in one place. It is designed for people who want to understand the person behind the projects: what he has built, how he approaches problems, where he has worked, and how to get in touch.

The portfolio tells that story through project examples and outcomes, a professional timeline, a practical skills inventory, and supporting credentials. Its visual system pairs a responsive layout with light and dark themes, subtle motion, and clear paths to the work and contact links.

## Explore the portfolio

| Page | What you’ll find |
| --- | --- |
| **Home** | Introduction, selected impact highlights, a short background, and featured projects |
| **Projects** | Project cards that can be filtered by PM, Analytics, Tech, and other categories |
| **Skills** | Product and business capabilities, technical skills, tools, AI, and collaboration skills |
| **Experience** | Roles and leadership experience, with responsibilities and outcomes |
| **Certificates** | Selected learning and professional credentials |
| **Contact** | Ways to connect with Om |

### Featured work

- **CIBILIZE** — a financial assistant concept that reads bank statements and supports credit-card recommendations, spending breakdowns, and eligibility checks.
- **In-Transit Incident Analysis Model** — an incident-analysis dashboard built to reduce manual reporting effort and make regional safety trends easier to review.
- **Smart Manufacturing Production Optimizer** — a project focused on using predictive signals to support equipment maintenance and production performance.
- **Brain Tumor Detection** — an image-processing project using Python and OpenCV to highlight possible abnormalities in MRI scans.
- **Heart Stroke Detection** — a predictive analytics project exploring stroke risk from health records.

The project descriptions and linked demos or repositories are shown in the site’s Projects page; detailed case studies are not currently published.

## Experience and impact

The Experience page highlights work across business analysis, software development, and technical leadership. Examples include incident reporting and HSSE analysis at Bharat Petroleum, API and platform work at Suvidha Foundation, and organizing technical programs with Google Developer Groups on Campus.

The homepage surfaces selected outcomes from those experiences, including reduced manual reporting effort and participation in campus events. They are portfolio highlights; consult the linked projects and experience details for their context.

## Built with

- **Next.js 16 App Router** and **React 19**
- **TypeScript**
- **CSS** in `app/globals.css`, with shared color variables and responsive layouts
- **Framer Motion** for page transitions
- **Lucide React** and **React Icons** for interface icons
- **next/font** for Manrope, Plus Jakarta Sans, and JetBrains Mono

There is no application database or server-side API in this portfolio. The site content is composed in the page components, and images, PDFs, logos, and other static files live in `public/`.

## Run locally

### Requirements

- Node.js and npm

### Setup

```bash
git clone https://github.com/OmSantoshBadade/Om-Badade-PM-Portfolio.git
cd Om-Badade-PM-Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Check the code with ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

Build and lint before deploying:

```bash
npm run lint
npm run build
npm run start
```

The project is configured as a standard Next.js application and can be deployed on Vercel or another compatible Next.js host.

## Project structure

```text
app/
├── certificates/   # Credential gallery
├── contact/        # Contact links
├── experience/     # Work and leadership timeline
├── projects/       # Filterable project portfolio
├── skills/         # Skills and tools
├── globals.css     # Shared visual system and responsive styling
├── layout.tsx      # Root layout, fonts, theme initialization, navigation, footer
├── page.tsx        # Homepage and featured sections
└── template.tsx    # Page transition wrapper

components/
├── Navbar.tsx      # Site navigation and theme toggle
└── Footer.tsx      # Contact links and footer

public/             # Project visuals, profile image, logos, resume, certificates
```

## Design details

- A sticky navigation bar links the main sections and highlights the active page.
- Light and dark themes respect the visitor’s saved preference and system appearance.
- Shared CSS variables keep colors and surfaces consistent across pages.
- Responsive layouts adapt project, skill, and credential cards to smaller screens.
- Reduced-motion preferences are respected in the stylesheet.

## Repository notes

- Main page content and section-page content are defined in `app/`.
- Shared layout and navigation elements are in `components/`.
- Update static images, logos, resume, and certificate files in `public/`; reference them from the site by their public path.
- A test runner is not configured. The available quality checks are `npm run lint` and `npm run build`.

---

Built with care by [Om Badade](https://github.com/OmSantoshBadade).
