import Link from 'next/link';
import { Container } from '@/components/layout';
import { SectionHeading, Card, CardTitle, CardDescription } from '@/components/ui';
import { WHO_WE_HELP } from '@/lib/constants';

export function WhoWeHelp() {
  const icons = {
    'Equipment Buyers': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    'Dealers': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    'OEMs': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="Who We Help"
          title="Coordination support for every stakeholder"
          subtitle="Whether you're purchasing equipment, selling it, or manufacturing it, Verdent helps you navigate the complexity of incentive-supported transactions."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {WHO_WE_HELP.map((item) => (
            <Card key={item.title} hover className="flex flex-col">
              <div className="text-primary-600 mb-4">
                {icons[item.title as keyof typeof icons]}
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="flex-1">
                {item.description}
              </CardDescription>
              <ul className="mt-6 space-y-2">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-body-sm text-secondary-600">
                    <svg className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-secondary-100">
                <Link
                  href={item.cta.href}
                  className="text-body-sm font-medium text-primary-700 hover:text-primary-800 inline-flex items-center gap-1"
                >
                  {item.cta.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
