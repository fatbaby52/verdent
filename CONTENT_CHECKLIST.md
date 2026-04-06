# Verdent Content & Asset Checklist

This document lists all placeholders and content that needs to be updated before launch.

## Priority 1: Must Have Before Launch

### Company Information
- [ ] **Email address**: Update `contact@verdent.com` with real email
- [ ] **Phone number**: Update `(555) 123-4567` with real phone
- [ ] **Service area**: Confirm "California and Western United States"
- [ ] **LinkedIn URL**: Add actual company LinkedIn profile
- [ ] **Founded year**: Update from `2023` if different
- [ ] **Website URL**: Update `https://verdent.com` everywhere

### Team/Founder
- [ ] **Founder name**: Replace `[Founder Name]` placeholder
- [ ] **Founder role/title**: Confirm "Founder" or add specific title
- [ ] **Founder bio**: Replace placeholder with 2-3 sentence professional bio
- [ ] **Founder LinkedIn**: Add actual LinkedIn profile URL
- [ ] **Founder photo**: Add professional headshot to `/public/images/team/`

### Trust Metrics
- [ ] **Years of experience**: Update `[X]` placeholder
- [ ] **Transactions supported**: Update `[XX]` placeholder
- [ ] **Response time**: Confirm "24 hours" or update

### Legal
- [ ] **Privacy Policy**: Have attorney review and finalize
- [ ] **Domain verification**: Add Google Search Console verification
- [ ] **Business entity**: Confirm business name matches legal entity

## Priority 2: High Impact Content

### Testimonials (3 needed)
Replace placeholders in `src/lib/constants.ts` → `TESTIMONIALS`

**Testimonial 1** (Client/Buyer):
- [ ] Quote text
- [ ] Client name (or initials)
- [ ] Title/role
- [ ] Company name (or industry if confidential)

**Testimonial 2** (Dealer):
- [ ] Quote text
- [ ] Contact name
- [ ] Role at dealership
- [ ] Dealership name

**Testimonial 3** (General):
- [ ] Quote text
- [ ] Client name
- [ ] Title
- [ ] Company

### Case Studies (3 needed)
Replace placeholders in `src/lib/constants.ts` → `CASE_STUDIES`

**Case Study 1**:
- [ ] Client type (e.g., "Fleet Operator", "Contractor")
- [ ] Problem description
- [ ] Verdent's role description
- [ ] Outcome description
- [ ] Metrics: Incentive amount, timeline, other numbers

**Case Study 2**:
- [ ] Client type
- [ ] Problem description
- [ ] Verdent's role description
- [ ] Outcome description
- [ ] Metrics

**Case Study 3**:
- [ ] Client type
- [ ] Problem description
- [ ] Verdent's role description
- [ ] Outcome description
- [ ] Metrics

### About Page Story
- [ ] Review and personalize company story section
- [ ] Update "Our story" content with actual founding narrative
- [ ] Add specific examples or motivation if appropriate

## Priority 3: Visual Assets

### Logo & Branding
- [ ] **Logo file**: Create/add actual logo to `/public/`
- [ ] **Favicon**: Create favicon.ico (recommend 32x32 and 16x16)
- [ ] **OG Image**: Create social share image (1200x630px)
- [ ] **Twitter Image**: Create Twitter card image

### Photos (Optional but Recommended)
- [ ] Team/founder headshot
- [ ] Office or workspace photo (if applicable)
- [ ] Clean equipment photos (if permission obtained)
- [ ] Industry-relevant imagery

## Priority 4: Technical Configuration

### Domain & Hosting
- [ ] Purchase/confirm domain
- [ ] Set up hosting (Vercel/Netlify)
- [ ] Configure SSL certificate
- [ ] Set up email for contact@verdent.com

### Analytics & Tracking
- [ ] Set up Google Analytics
- [ ] Add GA tracking ID to environment variables
- [ ] Set up Google Search Console
- [ ] Submit sitemap

### Form Handling
- [ ] Choose form handling solution (Netlify Forms, Formspree, custom)
- [ ] Connect contact form to backend
- [ ] Set up email notifications for form submissions
- [ ] Test form submission flow

### Optional Integrations
- [ ] Calendly: Add scheduling link to contact page
- [ ] CRM: Connect form submissions if applicable
- [ ] Email marketing: Set up newsletter if planned

## Priority 5: Final Review

### Content Review
- [ ] Proofread all page content
- [ ] Verify all links work
- [ ] Check all placeholder text is removed
- [ ] Review on mobile devices
- [ ] Test form submission

### SEO Review
- [ ] Verify meta titles and descriptions
- [ ] Check structured data with Google's Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Test page speed (aim for 90+ on PageSpeed Insights)

### Accessibility Review
- [ ] Test keyboard navigation
- [ ] Verify color contrast
- [ ] Test with screen reader (basic check)
- [ ] Confirm all images have alt text

---

## Quick Find: Placeholder Locations

Search for these strings to find placeholders:

```
TODO:           - Code comments marking needed updates
[               - Square brackets indicate placeholder content
placeholder     - Explicit placeholder markers
@verdent.com    - Email to update
(555)           - Phone to update
```

## Recommended First Updates

For maximum credibility improvement, update these first:

1. **Contact information** (email, phone) - Immediate credibility
2. **Founder name and bio** - Personal trust building
3. **At least one testimonial** - Social proof
4. **Trust metrics** (years, transactions) - Quantified credibility
5. **One complete case study** - Demonstrates real work
