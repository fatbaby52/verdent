# Verdent Launch Priorities

## Part 1: Factual Placeholders Requiring Confirmation

These are all the placeholder values in the codebase that need real data:

### Company Contact Information
| Location | Current Value | Action Needed |
|----------|---------------|---------------|
| `src/lib/constants.ts` → `COMPANY.email` | `contact@verdent.com` | Confirm or update email |
| `src/lib/constants.ts` → `COMPANY.phone` | `(555) 123-4567` | Replace with real phone |
| `src/lib/constants.ts` → `COMPANY.linkedIn` | `https://linkedin.com/company/verdent` | Add real LinkedIn URL |
| `src/lib/constants.ts` → `COMPANY.foundedYear` | `2023` | Confirm or update year |
| `src/lib/constants.ts` → `COMPANY.serviceArea` | `California and Western United States` | Confirm service area |

### Trust Metrics
| Location | Current Value | Action Needed |
|----------|---------------|---------------|
| `src/lib/constants.ts` → `TRUST_SIGNALS.yearsExperience` | `[X]` | Add actual years |
| `src/lib/constants.ts` → `TRUST_SIGNALS.transactionsSupported` | `[XX]` | Add actual count |
| `src/lib/constants.ts` → `TRUST_SIGNALS.averageResponseTime` | `[24 hours]` | Confirm response time |

### Team/Founder Information
| Location | Current Value | Action Needed |
|----------|---------------|---------------|
| `src/lib/constants.ts` → `TEAM_MEMBERS[0].name` | `[Founder Name]` | Add real name |
| `src/lib/constants.ts` → `TEAM_MEMBERS[0].bio` | `[Brief professional bio...]` | Write actual bio |
| `src/lib/constants.ts` → `TEAM_MEMBERS[0].linkedIn` | `https://linkedin.com/in/founder` | Add real LinkedIn |
| `src/lib/constants.ts` → `TEAM_MEMBERS[0].image` | `/images/team/founder.jpg` | Add actual photo |

### Testimonials (All 3 are placeholders)
Location: `src/lib/constants.ts` → `TESTIMONIALS`

Each testimonial needs:
- Quote text
- Author name
- Role/title
- Company name

### Case Studies (All 3 are placeholders)
Location: `src/lib/constants.ts` → `CASE_STUDIES`

Each case study needs:
- Client type
- Problem description
- Verdent's role
- Outcome
- Metrics (incentive amount, timeline, etc.)

### URLs to Update
| File | Current Value | Action Needed |
|------|---------------|---------------|
| `src/app/layout.tsx` | `https://verdent.com` | Confirm production URL |
| `src/app/sitemap.ts` | `https://verdent.com` | Update BASE_URL |
| `src/app/robots.ts` | `https://verdent.com` | Update BASE_URL |
| `src/components/seo/metadata.ts` | `https://verdent.com` | Update BASE_URL |
| `src/components/seo/JsonLd.tsx` | `https://verdent.com` | Update all URL references |

---

## Part 2: Text Snippets to Replace First for Maximum Credibility

Replace these in order of impact:

### 1. Contact Email (Immediate credibility)
```typescript
// src/lib/constants.ts, line ~12
email: 'contact@verdent.com',
// Replace with your actual business email
```

### 2. Phone Number (Immediate credibility)
```typescript
// src/lib/constants.ts, line ~14
phone: '(555) 123-4567',
// Replace with your actual phone number
```

### 3. Founder Name (Personal trust)
```typescript
// src/lib/constants.ts, line ~167
name: '[Founder Name]',
// Replace with actual founder name
```

### 4. Founder Bio (Personal trust)
```typescript
// src/lib/constants.ts, line ~170
bio: '[Brief professional bio highlighting relevant experience...]',
// Replace with 2-3 sentences about background and expertise
```

### 5. Years of Experience (Quantified trust)
```typescript
// src/lib/constants.ts, line ~182
yearsExperience: '[X]',
// Replace with actual number (e.g., '5' or '10+')
```

### 6. Transactions Supported (Social proof)
```typescript
// src/lib/constants.ts, line ~184
transactionsSupported: '[XX]',
// Replace with actual number (e.g., '50' or '100+')
```

### 7. First Testimonial Quote (Social proof)
```typescript
// src/lib/constants.ts, line ~152
quote: '[Testimonial quote from a satisfied client...]',
// Replace with actual client quote
```

### 8. First Case Study Client Type (Real work evidence)
```typescript
// src/lib/constants.ts, line ~108
clientType: '[Client Type - e.g., Fleet Operator]',
// Replace with actual client category
```

### 9. LinkedIn URL (Verification)
```typescript
// src/lib/constants.ts, line ~18
linkedIn: 'https://linkedin.com/company/verdent',
// Replace with actual company LinkedIn
```

### 10. Response Time (Service commitment)
```typescript
// src/lib/constants.ts, line ~186
averageResponseTime: '[24 hours]',
// Confirm or adjust based on actual response time
```

---

## Part 3: Top 10 Proof/Content Pieces to Collect

Gather these assets in order of importance:

### 1. Founder Professional Headshot
- High-resolution photo (min 400x400px)
- Professional appearance
- Neutral or branded background
- Save as `/public/images/team/founder.jpg`

### 2. Client Testimonial #1 (Equipment Buyer)
Collect:
- Written permission to use quote
- 2-4 sentence testimonial about working with Verdent
- Client name (or approval for initials/anonymous)
- Company name or industry vertical
- Role/title

### 3. Case Study #1 (Successful Transaction)
Document:
- Client type/industry
- Initial challenge or situation
- What Verdent did specifically
- Measurable outcome
- Incentive amount secured (if shareable)
- Timeline from start to completion

### 4. Client Testimonial #2 (Dealer or OEM)
Same format as #1, from a dealer or manufacturer perspective

### 5. Transaction Count
Calculate:
- Total number of transactions coordinated
- Or total incentive value facilitated
- Or number of clients served

### 6. Company Logo (Vector Format)
- SVG or high-resolution PNG
- Primary logo version
- Icon/mark version for favicon

### 7. Case Study #2
Same format as Case Study #1, different client type

### 8. Industry Credentials
Gather any:
- Professional memberships
- Certifications
- Awards or recognition
- Notable partnerships

### 9. Client Testimonial #3
Same format as #1, third perspective

### 10. OG/Social Share Image
Create:
- 1200x630px image for social sharing
- Includes logo and tagline
- Professional, on-brand design

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Find all TODO comments
grep -r "TODO:" src/

# Find all bracket placeholders
grep -r "\[" src/lib/constants.ts
```

---

## Pre-Launch Checklist

Before going live:

- [ ] All contact information updated
- [ ] At least 1 testimonial added
- [ ] At least 1 case study completed
- [ ] Founder information added
- [ ] Trust metrics updated
- [ ] Privacy policy reviewed by attorney
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Form handling connected
- [ ] Google Analytics set up
- [ ] Site tested on mobile
- [ ] All links verified working
