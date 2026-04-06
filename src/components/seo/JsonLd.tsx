import { COMPANY, FULL_FAQ } from '@/lib/constants';

/**
 * Organization Schema
 * Helps search engines understand the business
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    // TODO: Update with actual URL
    url: 'https://verdent.com',
    // TODO: Add actual logo URL
    // logo: 'https://verdent.com/logo.png',
    description:
      'Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward, including California CORE-related coordination.',
    // TODO: Update with actual contact info
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        // California approximate center
        latitude: 36.7783,
        longitude: -119.4179,
      },
      geoRadius: '500 mi',
    },
    // TODO: Add actual social profiles
    sameAs: [COMPANY.linkedIn],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * LocalBusiness Schema
 * Provides additional business information for local SEO
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY.name,
    // TODO: Update with actual URL
    url: 'https://verdent.com',
    description:
      'Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward, including California CORE-related coordination.',
    // TODO: Update with actual contact info
    email: COMPANY.email,
    telephone: COMPANY.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // California approximate center
      latitude: 36.7783,
      longitude: -119.4179,
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'California',
      },
    ],
    serviceType: [
      'Incentive Coordination',
      'Equipment Purchase Support',
      'Documentation Support',
      'Dealer Coordination',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ Schema
 * Helps FAQ content appear in search results
 */
export function FAQSchema({ faqs = FULL_FAQ }: { faqs?: typeof FULL_FAQ }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Breadcrumb Schema
 * Helps search engines understand site structure
 */
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service Schema
 * Describes the services offered
 */
export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Equipment Purchase Coordination',
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
    description:
      'Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward, including California CORE-related coordination.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema
 * Basic website information
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    // TODO: Update with actual URL
    url: 'https://verdent.com',
    description:
      'Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward, including California CORE-related coordination.',
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
