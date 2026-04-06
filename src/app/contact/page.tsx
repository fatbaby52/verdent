import type { Metadata } from 'next';
import { Container } from '@/components/layout';
import { Card, Badge } from '@/components/ui';
import { ContactForm } from '@/components/forms';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch',
  description:
    'Contact Verdent to discuss how we can help coordinate your incentive-supported equipment purchase. We typically respond within one business day.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary-50/50 to-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Contact</Badge>
            <h1 className="text-display md:text-display-lg text-secondary-900 mb-6">
              Let's discuss your project
            </h1>
            <p className="text-body-lg text-secondary-600">
              Whether you're a buyer, dealer, or OEM, we'd like to learn about your situation
              and explore how Verdent can help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-heading text-secondary-900 mb-6">
                Get in touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Email</h3>
                    {/* TODO: Replace with actual email */}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Phone</h3>
                    {/* TODO: Replace with actual phone */}
                    <a
                      href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Service Area</h3>
                    <p className="text-secondary-600">{COMPANY.serviceArea}</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">LinkedIn</h3>
                    {/* TODO: Replace with actual LinkedIn URL */}
                    <a
                      href={COMPANY.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <Card padding="md" className="mt-8 bg-primary-50 border-primary-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-primary-900">Response time</h3>
                    <p className="text-body-sm text-primary-700 mt-1">
                      We typically respond to inquiries within one business day. For urgent matters,
                      please indicate that in your message.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Calendly Placeholder */}
              {/* TODO: Add Calendly integration */}
              <div className="mt-6 p-6 border-2 border-dashed border-secondary-200 rounded-xl text-center">
                <svg className="w-8 h-8 text-secondary-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-body-sm text-secondary-500">
                  Calendly scheduling link coming soon
                </p>
                <p className="text-caption text-secondary-400 mt-1">
                  {/* TODO: Add Calendly embed or link */}
                  Book a consultation call directly
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h2 className="text-heading text-secondary-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-body text-secondary-600 mb-6">
                  Tell us about your project or question. The more detail you provide,
                  the better we can help.
                </p>

                <ContactForm />
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-lg text-secondary-900 mb-6">
              What to expect after you reach out
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-primary-950 text-white flex items-center justify-center font-semibold text-sm mb-3">
                  1
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1">Initial response</h3>
                <p className="text-body-sm text-secondary-600">
                  We'll acknowledge your message within one business day and ask any clarifying questions.
                </p>
              </div>

              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-primary-950 text-white flex items-center justify-center font-semibold text-sm mb-3">
                  2
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1">Consultation call</h3>
                <p className="text-body-sm text-secondary-600">
                  If it makes sense, we'll schedule a brief call to learn more about your situation.
                </p>
              </div>

              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-primary-950 text-white flex items-center justify-center font-semibold text-sm mb-3">
                  3
                </div>
                <h3 className="font-semibold text-secondary-900 mb-1">Clear next steps</h3>
                <p className="text-body-sm text-secondary-600">
                  We'll provide a clear recommendation on whether and how Verdent can help.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Information Notice */}
      <section className="py-8 bg-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body-sm text-secondary-600 text-center">
              <strong>A note about your information:</strong> We use the information you provide
              solely to respond to your inquiry and provide relevant services. We do not sell or
              share your contact information with third parties. See our{' '}
              <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                Privacy Policy
              </a>{' '}
              for details.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
