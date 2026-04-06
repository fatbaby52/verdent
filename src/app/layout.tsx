import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from '@/components/seo';
import './globals.css';

// TODO: Update these metadata values with actual company information
export const metadata: Metadata = {
  metadataBase: new URL('https://verdent.com'), // TODO: Update with actual domain
  title: {
    default: 'Verdent | Clean Equipment Coordination',
    template: '%s | Verdent',
  },
  description:
    'Verdent helps coordinate incentive-supported clean equipment purchases. We work with buyers, dealers, and OEMs to navigate complex processes from quotes to documentation.',
  keywords: [
    'clean equipment',
    'incentive coordination',
    'California CORE',
    'equipment incentives',
    'dealer coordination',
    'documentation support',
    'zero emission equipment',
    'clean energy equipment',
  ],
  authors: [{ name: 'Verdent' }],
  creator: 'Verdent',
  publisher: 'Verdent',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // TODO: Update with actual URL
    url: 'https://verdent.com',
    siteName: 'Verdent',
    title: 'Verdent | Clean Equipment Coordination',
    description:
      'Verdent helps coordinate incentive-supported clean equipment purchases. We work with buyers, dealers, and OEMs to navigate complex processes.',
    // TODO: Add OG image
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Verdent - Clean Equipment Coordination',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdent | Clean Equipment Coordination',
    description:
      'Verdent helps coordinate incentive-supported clean equipment purchases.',
    // TODO: Add Twitter image
    // images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Add verification codes when ready
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data for SEO */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
