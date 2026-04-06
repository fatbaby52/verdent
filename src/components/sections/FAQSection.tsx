'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { SectionHeading, Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { FAQ } from '@/types';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  showViewAll?: boolean;
  viewAllHref?: string;
}

export function FAQSection({
  title = 'Frequently asked questions',
  subtitle,
  faqs,
  showViewAll = true,
  viewAllHref = '/faq',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="FAQ"
          title={title}
          subtitle={subtitle || 'Find answers to common questions about Verdent and how we help coordinate equipment purchases.'}
        />

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-secondary-100 border-t border-b border-secondary-100">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  type="button"
                  className="flex w-full items-start justify-between text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-body font-medium text-secondary-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    <svg
                      className={cn(
                        'w-5 h-5 text-secondary-500 transition-transform duration-200',
                        openIndex === index && 'rotate-180'
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-200',
                    openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  )}
                >
                  <p className="text-body text-secondary-600 pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {showViewAll && (
            <div className="text-center mt-8">
              <Button as="link" href={viewAllHref} variant="outline">
                View all FAQs
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
