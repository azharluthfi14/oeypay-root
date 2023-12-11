import type { ReactNode } from 'react';

import { cn } from '@/utils';

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('bg-white rounded-lg p-4 border', className)}>
      {children}
    </div>
  );
};
