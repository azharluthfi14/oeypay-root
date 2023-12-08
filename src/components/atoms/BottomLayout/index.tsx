import React from 'react';

export const BottomLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="absolute bottom-0 z-[2]">{children}</div>;
};
