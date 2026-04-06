import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  href?: never;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'link';
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-950 text-white hover:bg-primary-900 focus-visible:ring-primary-600',
  secondary:
    'bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-500',
  outline:
    'border-2 border-primary-950 text-primary-950 hover:bg-primary-50 focus-visible:ring-primary-600',
  ghost:
    'text-secondary-700 hover:bg-secondary-100 hover:text-secondary-900 focus-visible:ring-secondary-400',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-5 py-2.5 text-body-sm',
  lg: 'px-6 py-3 text-body',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (props.as === 'link') {
    return (
      <Link href={props.href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
