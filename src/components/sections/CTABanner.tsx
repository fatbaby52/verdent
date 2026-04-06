import { Container } from '@/components/layout';
import { Button } from '@/components/ui';

interface CTABannerProps {
  headline: string;
  description?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'dark';
}

export function CTABanner({
  headline,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
}: CTABannerProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`section-padding ${
        isDark
          ? 'bg-primary-950 text-white'
          : 'bg-gradient-to-r from-primary-50 to-primary-100'
      }`}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-heading-lg md:text-display text-balance mb-4 ${
              isDark ? 'text-white' : 'text-secondary-900'
            }`}
          >
            {headline}
          </h2>
          {description && (
            <p
              className={`text-body-lg mb-8 ${
                isDark ? 'text-primary-100' : 'text-secondary-600'
              }`}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="link"
              href={primaryCta.href}
              size="lg"
              variant={isDark ? 'secondary' : 'primary'}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                as="link"
                href={secondaryCta.href}
                size="lg"
                variant={isDark ? 'ghost' : 'outline'}
                className={isDark ? 'text-white hover:bg-white/10' : ''}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
