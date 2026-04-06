import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  as?: 'h1' | 'h2' | 'h3';
  badge?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
  as: Component = 'h2',
  badge,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-caption font-medium text-primary-700 bg-primary-50 rounded-full">
          {badge}
        </span>
      )}
      <Component
        className={cn(
          'text-heading-lg md:text-display text-secondary-900 text-balance',
          titleClassName
        )}
      >
        {title}
      </Component>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-body-lg text-secondary-600',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
