# Verdent Marketing Website

A professional marketing website for Verdent, a third-party coordinator for incentive-supported clean equipment purchases.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel/Netlify compatible

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm start
```

## Project Structure

```
verdent/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with nav/footer
│   │   ├── page.tsx            # Home page
│   │   ├── california-core/    # CORE support page
│   │   ├── services/           # Services page
│   │   ├── about/              # About page
│   │   ├── case-studies/       # Case studies page
│   │   ├── faq/                # FAQ page
│   │   ├── contact/            # Contact page
│   │   └── privacy/            # Privacy policy
│   ├── components/
│   │   ├── layout/             # Header, Footer, Container
│   │   ├── ui/                 # Button, Card, Badge, etc.
│   │   ├── sections/           # Page sections (Hero, FAQ, etc.)
│   │   ├── forms/              # Contact form
│   │   └── seo/                # Structured data components
│   ├── lib/
│   │   ├── constants.ts        # Site-wide constants & content
│   │   └── utils.ts            # Utility functions
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── next.config.js              # Next.js configuration
```

## Customization

### Content Updates

Most content is centralized in `src/lib/constants.ts`:

- **Company Info**: Update `COMPANY` object with real contact details
- **Team**: Update `TEAM_MEMBERS` with actual team information
- **Testimonials**: Replace `TESTIMONIALS` placeholders
- **Case Studies**: Replace `CASE_STUDIES` with real examples
- **Trust Signals**: Update `TRUST_SIGNALS` with actual metrics

### Finding Placeholders

Search for `TODO:` comments throughout the codebase to find items needing updates:

```bash
# Find all TODO comments
grep -r "TODO:" src/
```

### Design Customization

Colors and typography are configured in `tailwind.config.ts`:

- Primary: Deep forest green (#1B4332)
- Secondary: Slate blue (#475569)
- Accent: Warm amber (#D97706)

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure the build

### Netlify

1. Push your code to a Git repository
2. Import the project in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Environment Variables

For production, set the following environment variables:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Form handling
CONTACT_FORM_ENDPOINT=your-form-endpoint
```

## SEO

The site includes:

- Semantic HTML structure
- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for:
  - Organization
  - LocalBusiness
  - FAQPage
  - WebSite
- Auto-generated sitemap.xml
- robots.txt configuration

### Updating SEO

1. **Base URL**: Update in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`
2. **Metadata**: Each page exports its own metadata
3. **Structured Data**: Update schemas in `src/components/seo/JsonLd.tsx`

## Form Handling

The contact form in `src/components/forms/ContactForm.tsx` includes:

- Client-side validation
- Lead qualification dropdown (Buyer/Dealer/OEM/Other)
- Success/error states

To connect to a backend:

1. Replace the simulated submission in `handleSubmit()`
2. Options include:
   - Netlify Forms (add `data-netlify="true"` attribute)
   - Formspree
   - Custom API endpoint
   - Email service (SendGrid, Mailgun, etc.)

## Accessibility

The site follows accessibility best practices:

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion support

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Private. All rights reserved.
