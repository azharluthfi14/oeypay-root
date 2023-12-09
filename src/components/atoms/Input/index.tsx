import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-md transition-all ease-in-out duration-300 border placeholder:text-[12px] border-transparent bg-white2 px-4 py-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
