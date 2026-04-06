import Link from 'next/link';
import { Container } from '@/components/layout';
import { SectionHeading, Button } from '@/components/ui';
import { CaseStudyCard } from './CaseStudyCard';
import { CASE_STUDIES } from '@/lib/constants';

interface CaseStudyPreviewProps {
  limit?: number;
  showViewAll?: boolean;
}

export function CaseStudyPreview({ limit = 3, showViewAll = true }: CaseStudyPreviewProps) {
  const displayedStudies = CASE_STUDIES.slice(0, limit);

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          badge="Results"
          title="Coordination in action"
          subtitle="See how Verdent has helped buyers, dealers, and OEMs successfully navigate incentive-supported equipment purchases."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Button as="link" href="/case-studies" variant="outline">
              View all case studies
            </Button>
          </div>
        )}

        {/* TODO: Remove this notice once real case studies are added */}
        <p className="text-center text-body-sm text-secondary-500 mt-4">
          Note: Case study placeholders. Actual client examples to be added.
        </p>
      </Container>
    </section>
  );
}
