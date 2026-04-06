import type { Metadata } from 'next';
import { Container } from '@/components/layout';
import {
  Hero,
  ProcessSteps,
  FAQSection,
  CTABanner,
} from '@/components/sections';
import { SectionHeading, Card, CardTitle, CardDescription, Badge } from '@/components/ui';
import { CORE_PROCESS_STEPS, FULL_FAQ } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'California CORE Voucher Support | Coordination Services',
  description:
    'Verdent provides coordination support for California CORE-related clean equipment purchases. We help buyers, dealers, and OEMs navigate the process from interest to documentation submission.',
  keywords: [
    'California CORE',
    'CORE voucher',
    'clean equipment incentive',
    'CORE coordination',
    'equipment voucher support',
    'zero emission equipment',
    'California clean equipment',
  ],
};

// Filter FAQs relevant to CORE
const coreFaqs = FULL_FAQ.filter(
  (faq) =>
    faq.question.toLowerCase().includes('core') ||
    faq.question.toLowerCase().includes('voucher') ||
    faq.question.toLowerCase().includes('incentive') ||
    faq.question.toLowerCase().includes('dealer') ||
    faq.question.toLowerCase().includes('submit')
);

export default function CaliforniaCorePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="California CORE Coordination Support"
        subheadline="Verdent helps buyers, dealers, and OEMs navigate California CORE-related clean equipment purchases. We coordinate the process from initial interest through documentation preparation and dealer submission."
        primaryCta={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCta={{ label: 'Learn the Process', href: '#process' }}
        showTrustSignals={false}
      />

      {/* Important Disclaimer */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <Container>
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-body font-semibold text-amber-800 mb-1">
                Important: Understanding Verdent's Role
              </h2>
              <p className="text-body-sm text-amber-700">
                Verdent is an independent third-party coordination service. We are <strong>not</strong> the
                California CORE program, its administrator, or an official program partner. We do not approve,
                guarantee, or award incentives. CORE-approved dealers submit voucher requests to the program.
                Verdent helps coordinate the preparation process and supports communication between all parties.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What is California CORE */}
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What is California CORE?"
              subtitle="A brief overview of the Clean Off-Road Equipment Voucher Incentive Project"
              align="left"
            />

            <div className="prose-custom">
              <p>
                The California CORE (Clean Off-Road Equipment Voucher Incentive Project) is a statewide
                incentive program designed to accelerate the adoption of zero-emission off-road equipment
                in California. The program provides vouchers that reduce the purchase price of eligible
                clean equipment.
              </p>
              <p>
                CORE is administered by CALSTART and funded by the California Air Resources Board (CARB).
                Voucher requests are submitted by CORE-approved dealers on behalf of equipment purchasers.
              </p>
              <p>
                <strong>For official program information</strong>, visit the{' '}
                {/* TODO: Verify this URL is correct */}
                <a
                  href="https://californiacore.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  California CORE website
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What Verdent Helps With */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Our Services"
            title="How Verdent supports CORE-related transactions"
            subtitle="We coordinate the process so you can focus on your equipment purchase."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Program Understanding',
                description:
                  'We help you understand how the CORE process works and what documentation is typically required.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: 'Dealer Connections',
                description:
                  'We help facilitate introductions to CORE-approved dealers who can provide quotes on eligible equipment.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Quote Coordination',
                description:
                  'We coordinate communication between you, dealers, and OEMs to gather accurate quotes that align with program requirements.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Documentation Preparation',
                description:
                  'We help organize and review the documentation needed for the voucher request, ensuring nothing falls through the cracks.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Submission Support',
                description:
                  'We help ensure the documentation package is complete and ready for the CORE-approved dealer to submit.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Ongoing Communication',
                description:
                  'We maintain communication with all parties throughout the process, from initial inquiry to equipment delivery.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Card key={item.title} padding="lg">
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-subheading">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-secondary-50 rounded-xl max-w-3xl mx-auto">
            <p className="text-body text-secondary-700 text-center">
              <strong>Note:</strong> Verdent coordinates and supports the process. The CORE-approved dealer
              submits the voucher request to the program. Incentive approval decisions are made by the
              program administrator.
            </p>
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <div id="process">
        <ProcessSteps
          badge="CORE Process"
          title="How Verdent coordinates CORE-related purchases"
          subtitle="A structured approach to navigating the California CORE voucher process."
          steps={CORE_PROCESS_STEPS}
        />
      </div>

      {/* Common Pain Points */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Common Challenges"
            title="Documentation and coordination pain points"
            subtitle="These are the challenges Verdent helps address in CORE-related transactions."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                problem: 'Unclear program requirements',
                solution: 'Verdent helps clarify what documentation is typically needed and who provides it.',
              },
              {
                problem: 'Difficulty finding approved dealers',
                solution: 'We help connect buyers with CORE-approved dealers in their area.',
              },
              {
                problem: 'Miscommunication between parties',
                solution: 'Verdent serves as a coordination hub, reducing confusion and delays.',
              },
              {
                problem: 'Incomplete documentation packages',
                solution: 'We help organize and review paperwork before dealer submission.',
              },
              {
                problem: 'Missed deadlines and delays',
                solution: 'We track progress and follow up proactively with all parties.',
              },
              {
                problem: 'Unfamiliar process for first-time participants',
                solution: 'Verdent guides you through each step of the coordination process.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-secondary-50">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">{item.problem}</p>
                  <p className="text-body-sm text-secondary-600 mt-1">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ideal Client Profiles */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            badge="Who We Help"
            title="Ideal clients for CORE coordination support"
            subtitle="Verdent works with a variety of stakeholders in CORE-related transactions."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: 'Equipment Buyers',
                examples: [
                  'Contractors and construction companies',
                  'Landscape and grounds maintenance',
                  'Municipal and government fleets',
                  'Agricultural operations',
                  'Warehouse and logistics',
                ],
                description: 'Organizations purchasing eligible clean off-road equipment who want coordination support through the CORE process.',
              },
              {
                type: 'Dealers',
                examples: [
                  'CORE-approved equipment dealers',
                  'Dealers new to CORE transactions',
                  'Multi-location dealerships',
                  'Specialty equipment dealers',
                ],
                description: 'Dealers who want support coordinating customer transactions, documentation, and communication.',
              },
              {
                type: 'OEMs',
                examples: [
                  'Equipment manufacturers',
                  'Emerging technology providers',
                  'Established OEMs expanding clean offerings',
                ],
                description: 'Manufacturers looking to enable their dealers and customers to successfully navigate CORE purchases.',
              },
            ].map((profile) => (
              <Card key={profile.type} padding="lg" className="flex flex-col">
                <Badge variant="primary" className="self-start mb-4">
                  {profile.type}
                </Badge>
                <p className="text-body text-secondary-700 mb-4">{profile.description}</p>
                <div className="mt-auto">
                  <p className="text-body-sm font-medium text-secondary-500 uppercase tracking-wide mb-2">
                    Common examples:
                  </p>
                  <ul className="space-y-1">
                    {profile.examples.map((example, i) => (
                      <li key={i} className="text-body-sm text-secondary-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQSection
        title="California CORE FAQ"
        subtitle="Common questions about Verdent's CORE coordination services."
        faqs={coreFaqs}
        showViewAll={true}
      />

      {/* CTA */}
      <CTABanner
        headline="Ready to discuss your CORE-related project?"
        description="Contact Verdent to learn how we can help coordinate your California CORE equipment purchase."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'View All Services', href: '/services' }}
        variant="dark"
      />
    </>
  );
}
