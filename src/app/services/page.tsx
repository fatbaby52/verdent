import type { Metadata } from 'next';
import { Container } from '@/components/layout';
import { SectionHeading, Card, Badge, Button } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services | Coordination Support for Equipment Purchases',
  description:
    'Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward. Services include dealer coordination, documentation support, and process management.',
};

export default function ServicesPage() {
  // Define icons for each service
  const serviceIcons: Record<string, React.ReactNode> = {
    'Incentive Coordination Support': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    'Quote and Dealer Coordination': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    'Purchaser Readiness and Documentation Support': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'OEM and Dealer Enablement': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    'Process Management and Communications Support': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  };

  // Map service titles to anchor IDs
  const serviceAnchors: Record<string, string> = {
    'Incentive Coordination Support': 'incentive-coordination',
    'Quote and Dealer Coordination': 'quote-coordination',
    'Purchaser Readiness and Documentation Support': 'documentation-support',
    'OEM and Dealer Enablement': 'dealer-enablement',
    'Process Management and Communications Support': 'process-management',
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary-50/50 to-background">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Services</Badge>
            <h1 className="text-display md:text-display-lg text-secondary-900 mb-6">
              Coordination services for incentive-supported equipment purchases
            </h1>
            <p className="text-body-lg text-secondary-600 mb-8">
              Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize
              and move incentive-supported clean equipment transactions forward, including
              California CORE-related coordination.
            </p>
            <Button as="link" href="/contact" size="lg">
              Discuss Your Needs
            </Button>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                id={serviceAnchors[service.title]}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                      {serviceIcons[service.title]}
                    </div>
                    <h2 className="text-heading-lg text-secondary-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-body-lg text-secondary-600 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-body font-semibold text-secondary-800 mb-1">
                          Who this is for
                        </h3>
                        <p className="text-body text-secondary-600">{service.forWhom}</p>
                      </div>

                      <div>
                        <h3 className="text-body font-semibold text-secondary-800 mb-1">
                          The problem it solves
                        </h3>
                        <p className="text-body text-secondary-600">{service.problemSolved}</p>
                      </div>

                      <div>
                        <h3 className="text-body font-semibold text-secondary-800 mb-1">
                          Typical engagement
                        </h3>
                        <p className="text-body text-secondary-600">{service.typicalEngagement}</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual/Card */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card padding="lg" className="bg-secondary-50 border-none">
                      <h4 className="text-subheading text-secondary-800 mb-4">
                        Key benefits
                      </h4>
                      <ul className="space-y-3">
                        {[
                          'Reduced confusion and delays',
                          'Organized documentation',
                          'Clear communication between parties',
                          'Professional process management',
                          'Proactive follow-up and tracking',
                        ].map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-body text-secondary-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>

                {index < SERVICES.length - 1 && (
                  <hr className="mt-16 border-secondary-100" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Audience-specific sections */}
      <section className="section-padding bg-white" id="buyers">
        <Container>
          <SectionHeading
            badge="For Buyers"
            title="Services for equipment purchasers"
            subtitle="Whether you're purchasing your first piece of clean equipment or expanding your fleet, Verdent can help coordinate the process."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'First-time buyers',
                description: 'New to incentive programs? Verdent helps you understand the process and prepares you for a successful purchase.',
              },
              {
                title: 'Fleet operators',
                description: 'Managing multiple equipment purchases? We coordinate across transactions to keep everything organized.',
              },
              {
                title: 'Government and municipal buyers',
                description: 'Public sector procurement can be complex. Verdent helps navigate both internal and external requirements.',
              },
            ].map((item) => (
              <Card key={item.title} padding="lg">
                <h3 className="text-subheading text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-body text-secondary-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding" id="dealers">
        <Container>
          <SectionHeading
            badge="For Dealers"
            title="Services for equipment dealers"
            subtitle="Let Verdent handle coordination so you can focus on selling equipment and serving customers."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Transaction coordination',
                description: 'We support your customers through the incentive process, reducing your administrative burden.',
              },
              {
                title: 'Documentation support',
                description: 'We help organize and review paperwork before submission, reducing rejections and delays.',
              },
              {
                title: 'Customer communication',
                description: 'We keep your customers informed throughout the process, improving their experience.',
              },
            ].map((item) => (
              <Card key={item.title} padding="lg">
                <h3 className="text-subheading text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-body text-secondary-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white" id="oems">
        <Container>
          <SectionHeading
            badge="For OEMs"
            title="Services for equipment manufacturers"
            subtitle="Help your dealers and end customers successfully adopt your clean equipment through incentive programs."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Dealer enablement',
                description: 'We help your dealers serve customers more effectively on incentive-supported transactions.',
              },
              {
                title: 'Channel coordination',
                description: 'We coordinate between OEM, dealer, and end customer to ensure smooth transactions.',
              },
              {
                title: 'Market development',
                description: 'Reduce friction in the purchase process to accelerate adoption of your clean equipment.',
              },
            ].map((item) => (
              <Card key={item.title} padding="lg">
                <h3 className="text-subheading text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-body text-secondary-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Let's discuss how Verdent can help"
        description="Contact us to learn more about our coordination services and how we can support your equipment purchase."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'California CORE Support', href: '/california-core' }}
        variant="dark"
      />
    </>
  );
}
