import Link from 'next/link';
import { Card, CardTitle, Badge } from '@/components/ui';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  showLink?: boolean;
}

export function CaseStudyCard({ caseStudy, showLink = true }: CaseStudyCardProps) {
  return (
    <Card hover padding="lg" className="flex flex-col h-full">
      {/* Client Type Badge */}
      {/* TODO: Replace placeholder with actual client type */}
      <Badge variant="primary" className="self-start mb-4">
        {caseStudy.clientType}
      </Badge>

      {/* Problem */}
      <div className="mb-4">
        <h4 className="text-body-sm font-medium text-secondary-500 uppercase tracking-wide mb-1">
          Challenge
        </h4>
        {/* TODO: Replace placeholder with actual problem description */}
        <p className="text-body text-secondary-700">
          {caseStudy.problem}
        </p>
      </div>

      {/* Verdent's Role */}
      <div className="mb-4">
        <h4 className="text-body-sm font-medium text-secondary-500 uppercase tracking-wide mb-1">
          Verdent's Role
        </h4>
        {/* TODO: Replace placeholder with actual role description */}
        <p className="text-body text-secondary-700">
          {caseStudy.verdentRole}
        </p>
      </div>

      {/* Outcome */}
      <div className="mb-4 flex-1">
        <h4 className="text-body-sm font-medium text-secondary-500 uppercase tracking-wide mb-1">
          Outcome
        </h4>
        {/* TODO: Replace placeholder with actual outcome */}
        <p className="text-body text-secondary-700">
          {caseStudy.outcome}
        </p>
      </div>

      {/* Metrics */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <div className="pt-4 border-t border-secondary-100">
          <div className="grid grid-cols-2 gap-4">
            {/* TODO: Replace placeholder metrics with actual data */}
            {caseStudy.metrics.map((metric, index) => (
              <div key={index}>
                <p className="text-heading-sm text-primary-700">{metric.value}</p>
                <p className="text-caption text-secondary-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Link to full case study */}
      {showLink && (
        <div className="mt-4 pt-4 border-t border-secondary-100">
          <Link
            href={`/case-studies#${caseStudy.id}`}
            className="text-body-sm font-medium text-primary-700 hover:text-primary-800 inline-flex items-center gap-1"
          >
            Read full case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </Card>
  );
}
