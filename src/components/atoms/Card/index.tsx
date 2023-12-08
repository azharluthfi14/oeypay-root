import type { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white rounded-lg p-4 border">{children}</div>;
};
