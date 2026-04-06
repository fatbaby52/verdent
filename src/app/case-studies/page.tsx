import type { Metadata } from 'next';
import { Container } from '@/components/layout';
import { SectionHeading, Badge, Button } from '@/components/ui';
import { CaseStudyCard, CTABanner } from '@/components/sections';
import { CASE_STUDIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Case Studies | Coordination Results',
  description:
    'See how Verdent has helped buyers, dealers, and OEMs successfully navigate incentive-supported clean equipment purchases.',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary-50/50 to-background">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Case Studies</Badge>
            <h1 className="text-display md:text-display-lg text-secondary-900 mb-6">
              Coordination in action
            </h1>
            <p className="text-body-lg text-secondary-600">
              These case studies illustrate how Verdent helps buyers, dealers, and OEMs
              successfully navigate incentive-supported equipment purchases.
            </p>
          </div>
        </Container>
      </section>

      {/* Note about placeholders */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <Container>
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-body-sm text-amber-700">
                <strong>Note:</strong> These case studies contain placeholder content.
                The structure shows what information will be included once actual client
                examples are available. All details in brackets [ ] need to be replaced
                with real data.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((caseStudy) => (
              <div key={caseStudy.id} id={caseStudy.id} className="scroll-mt-24">
                <CaseStudyCard caseStudy={caseStudy} showLink={false} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What Makes These Successful */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="What makes coordination successful"
            subtitle="Common elements across successful Verdent engagements"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Early engagement',
                description: 'Starting coordination before problems arise leads to smoother transactions.',
              },
              {
                title: 'Clear communication',
                description: 'Regular updates to all parties prevent misunderstandings and delays.',
              },
              {
                title: 'Organized documentation',
                description: 'Complete, accurate paperwork reduces rejections and rework.',
              },
              {
                title: 'Proactive follow-up',
                description: 'Tracking deadlines and following up keeps transactions moving.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                <p className="text-body-sm text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Industries we've supported"
            subtitle="Verdent has coordination experience across multiple sectors"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              'Construction',
              'Landscaping',
              'Municipal Fleets',
              'Agriculture',
              'Warehousing',
              'Ground Support',
              'Ports and Marine',
              'Mining',
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-white rounded-lg border border-secondary-200 text-body text-secondary-700"
              >
                {industry}
              </span>
            ))}
          </div>

          {/* TODO: Remove this note once real experience is documented */}
          <p className="text-center text-body-sm text-secondary-500 mt-6">
            Note: Industry list is a placeholder. Update with actual industries served.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to be our next success story?"
        description="Contact Verdent to discuss how we can help coordinate your equipment purchase."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Learn About Our Services', href: '/services' }}
        variant="dark"
      />
    </>
  );
}
