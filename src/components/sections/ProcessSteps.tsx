import { Container } from '@/components/layout';
import { SectionHeading } from '@/components/ui';
import type { ProcessStep } from '@/types';

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  badge?: string;
}

export function ProcessSteps({ title, subtitle, steps, badge }: ProcessStepsProps) {
  return (
    <section className="section-padding bg-secondary-50">
      <Container>
        <SectionHeading
          badge={badge || 'The Process'}
          title={title}
          subtitle={subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-primary-200" aria-hidden="true" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div key={step.step} className="relative flex gap-6 md:gap-8">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-950 text-white flex items-center justify-center font-semibold text-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3 pb-2">
                    <h3 className="text-heading-sm text-secondary-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body text-secondary-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
