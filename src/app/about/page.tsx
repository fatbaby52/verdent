import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { SectionHeading, Card, Badge, Button } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { COMPANY, TEAM_MEMBERS, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Verdent | Our Story and Team',
  description:
    'Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward. Learn about our story and team.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Clarity',
      description: 'We make complex processes understandable. Clear communication is the foundation of successful coordination.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Responsiveness',
      description: 'We respond quickly and keep all parties informed. Delays kill deals, so we stay proactive.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Organization',
      description: 'We bring structure to chaotic processes. Organized documentation and systematic tracking prevent mistakes.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Execution',
      description: 'We focus on getting things done. Plans are only valuable when they lead to completed transactions.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary-50/50 to-background">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">About Verdent</Badge>
            <h1 className="text-display md:text-display-lg text-secondary-900 mb-6">
              A third-party coordinator for incentive-supported equipment transactions
            </h1>
            <p className="text-body-lg text-secondary-600">
              Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move
              incentive-supported clean equipment transactions forward, including California CORE-related coordination.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Our story"
              subtitle="Why Verdent exists"
              align="left"
            />

            <div className="prose-custom">
              {/* TODO: Replace this with the actual company story */}
              <p>
                Incentive programs for clean equipment represent a significant opportunity for businesses
                to reduce emissions while saving money. But the process of actually completing an
                incentive-supported equipment purchase is often frustrating and confusing.
              </p>
              <p>
                Buyers struggle to understand program requirements. Dealers juggle complex documentation.
                Manufacturers watch potential sales stall. Communication breaks down between parties who
                aren't used to working together. Deals that should happen don't.
              </p>
              <p>
                Verdent was founded to solve this coordination problem. We work alongside buyers, dealers,
                and OEMs to keep incentive-supported equipment purchases moving forward. We don't replace
                any of the existing parties. Instead, we provide the professional coordination that these
                complex transactions require.
              </p>
              <p>
                Our approach is practical and operations-focused. We help organize documentation, facilitate
                communication, track progress, and ensure nothing falls through the cracks. The result is
                smoother transactions, faster timelines, and less frustration for everyone involved.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Role in Ecosystem */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Our role in the clean equipment ecosystem"
            subtitle="Verdent is a coordination layer that connects existing stakeholders"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Visual diagram of relationships */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card padding="lg" className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Equipment Buyers</h3>
                  <p className="text-body-sm text-secondary-600">
                    Purchase clean equipment with incentive support
                  </p>
                </Card>

                <Card padding="lg" className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Dealers</h3>
                  <p className="text-body-sm text-secondary-600">
                    Sell equipment and submit voucher requests
                  </p>
                </Card>

                <Card padding="lg" className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-1">OEMs</h3>
                  <p className="text-body-sm text-secondary-600">
                    Manufacture clean equipment and support dealers
                  </p>
                </Card>
              </div>

              {/* Verdent in the middle */}
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-950 text-white rounded-xl">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 2L4 8v8c0 7.732 5.268 14.464 12 16 6.732-1.536 12-8.268 12-16V8L16 2z"
                      fill="currentColor"
                      fillOpacity="0.2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M12 16l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-semibold text-lg">Verdent coordinates between all parties</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6 mt-8">
              <p className="text-body text-secondary-700 text-center">
                <strong>Important:</strong> Verdent is an independent coordination service. We are not an
                incentive program, a dealer, or a manufacturer. We help coordinate the process without
                replacing any existing stakeholders.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Our team"
            subtitle="The people behind Verdent"
          />

          <div className="max-w-2xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.name} padding="lg" className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo placeholder */}
                <div className="w-24 h-24 rounded-xl bg-secondary-200 flex items-center justify-center flex-shrink-0">
                  {/* TODO: Replace with actual team photo */}
                  <svg className="w-12 h-12 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <div>
                  {/* TODO: Replace placeholder name and bio */}
                  <h3 className="text-heading-sm text-secondary-900">{member.name}</h3>
                  <p className="text-body text-primary-600 mb-3">{member.role}</p>
                  <p className="text-body text-secondary-600 mb-4">{member.bio}</p>

                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-body-sm text-secondary-500 hover:text-primary-600"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* TODO: Remove this notice once real team info is added */}
          <p className="text-center text-body-sm text-secondary-500 mt-6">
            Note: Team information placeholder. Update with actual founder/team details.
          </p>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Our values"
            subtitle="The principles that guide how we work"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} padding="lg">
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-subheading text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-body text-secondary-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaborative Approach */}
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="A collaborative approach"
              subtitle="We work with you, not instead of you"
            />

            <p className="text-body-lg text-secondary-600 mb-8">
              Verdent is not here to replace anyone. We work alongside existing buyers, dealers,
              manufacturers, and program administrators to make the coordination process smoother.
              Our goal is to help everyone involved do their job more effectively.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: 'Years of experience', value: TRUST_SIGNALS.yearsExperience },
                { label: 'Transactions supported', value: TRUST_SIGNALS.transactionsSupported },
                { label: 'Average response time', value: TRUST_SIGNALS.averageResponseTime },
              ].map((stat) => (
                // TODO: Update these stats with real numbers
                <div key={stat.label} className="text-center">
                  <p className="text-display text-primary-700">{stat.value}</p>
                  <p className="text-body-sm text-secondary-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Want to learn more?"
        description="Contact us to discuss how Verdent can help with your equipment purchase or to learn more about our services."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
        variant="dark"
      />
    </>
  );
}
