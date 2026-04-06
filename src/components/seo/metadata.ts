import type { Metadata } from 'next';

// Base URL for the site
// TODO: Update with actual production URL
const BASE_URL = 'https://verdent.com';

/**
 * Generates metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      'clean equipment',
      'incentive coordination',
      'California CORE',
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Verdent',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * Default keywords for the site
 */
export const DEFAULT_KEYWORDS = [
  'clean equipment coordination',
  'incentive support',
  'California CORE',
  'equipment incentives',
  'dealer coordination',
  'documentation support',
  'zero emission equipment',
  'clean energy equipment',
  'voucher coordination',
  'equipment purchase support',
];
