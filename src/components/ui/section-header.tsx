import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  titleSize?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  align = 'center',
  titleSize = 'md',
  icon,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      <div className="flex items-center gap-2 justify-start mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h2
          className={cn(
            'font-bold tracking-tight',
            titleSize === 'sm' && 'text-2xl md:text-3xl',
            titleSize === 'md' && 'text-3xl md:text-4xl',
            titleSize === 'lg' && 'text-4xl md:text-5xl',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto'
          )}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={cn(
            'text-muted-foreground max-w-3xl mt-2',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}