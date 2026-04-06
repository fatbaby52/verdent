import { Container } from '@/components/layout';
import { SectionHeading, Card } from '@/components/ui';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary-50">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What our clients say"
          subtitle="Hear from buyers, dealers, and partners who have worked with Verdent on their equipment transactions."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} padding="lg" className="flex flex-col">
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-primary-200 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <blockquote className="flex-1">
                {/* TODO: Replace placeholder with actual testimonial */}
                <p className="text-body text-secondary-700 italic">
                  {testimonial.quote}
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-secondary-100">
                {/* TODO: Replace placeholders with actual names/companies */}
                <p className="font-medium text-secondary-900">
                  {testimonial.author}
                </p>
                <p className="text-body-sm text-secondary-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-body-sm text-secondary-500 mt-8">
          {/* TODO: Remove this notice once real testimonials are added */}
          Note: Testimonial placeholders. Actual client quotes to be added.
        </p>
      </Container>
    </section>
  );
}
