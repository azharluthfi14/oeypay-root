import { cn } from '@/utils';

export const IcArrowLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('h-6 w-6 font-extrabold', className)}>
      <path
        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};
