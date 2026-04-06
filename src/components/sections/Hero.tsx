import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { TRUST_SIGNALS } from '@/lib/constants';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showTrustSignals?: boolean;
}

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  showTrustSignals = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 text-primary-100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <polygon points="50,0 100,0 100,100 0,100" />
        </svg>
      </div>

      <Container className="relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-display md:text-display-lg text-secondary-900 text-balance mb-6">
              {headline}
            </h1>
            <p className="text-body-lg md:text-subheading text-secondary-600 mb-8 max-w-2xl">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button as="link" href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  as="link"
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {/* Trust Signals */}
            {showTrustSignals && (
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-body-sm text-secondary-500">
                {/* TODO: Update these with actual metrics */}
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{TRUST_SIGNALS.yearsExperience}+ years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{TRUST_SIGNALS.transactionsSupported}+ transactions supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{TRUST_SIGNALS.averageResponseTime} response time</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
