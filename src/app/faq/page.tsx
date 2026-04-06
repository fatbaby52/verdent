import type { Metadata } from 'next';
import { Container } from '@/components/layout';
import { FAQSection, CTABanner } from '@/components/sections';
import { Badge } from '@/components/ui';
import { FULL_FAQ } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description:
    'Find answers to common questions about Verdent, a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward.',
};

// Generate FAQ schema for SEO
function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FULL_FAQ.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary-50/50 to-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">FAQ</Badge>
            <h1 className="text-display md:text-display-lg text-secondary-900 mb-6">
              Frequently asked questions
            </h1>
            <p className="text-body-lg text-secondary-600">
              Find answers to common questions about Verdent, our services, and how we help
              coordinate incentive-supported equipment purchases.
            </p>
          </div>
        </Container>
      </section>

      {/* Full FAQ */}
      <FAQSection
        title="All questions"
        faqs={FULL_FAQ}
        showViewAll={false}
      />

      {/* Additional Info */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-secondary-900 mb-6 text-center">
              Still have questions?
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-secondary-50">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">Email us</h3>
                <p className="text-body-sm text-secondary-600 mb-3">
                  Send us your question and we'll respond within one business day.
                </p>
                {/* TODO: Replace with actual email */}
                <a
                  href="mailto:contact@verdent.com"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  contact@verdent.com
                </a>
              </div>

              <div className="text-center p-6 rounded-xl bg-secondary-50">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">Schedule a call</h3>
                <p className="text-body-sm text-secondary-600 mb-3">
                  Prefer to talk? Schedule a brief consultation call.
                </p>
                <a
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading text-secondary-900 mb-6">
              Learn more about Verdent
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/california-core"
                className="px-4 py-2 rounded-lg bg-white border border-secondary-200 text-secondary-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                California CORE Support
              </a>
              <a
                href="/services"
                className="px-4 py-2 rounded-lg bg-white border border-secondary-200 text-secondary-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                Our Services
              </a>
              <a
                href="/about"
                className="px-4 py-2 rounded-lg bg-white border border-secondary-200 text-secondary-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                About Verdent
              </a>
              <a
                href="/case-studies"
                className="px-4 py-2 rounded-lg bg-white border border-secondary-200 text-secondary-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                Case Studies
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to discuss your project?"
        description="Contact us to learn how Verdent can help coordinate your equipment purchase."
        primaryCta={{ label: 'Contact Verdent', href: '/contact' }}
        variant="dark"
      />
    </>
  );
}
