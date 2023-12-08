import { colors } from '@/constants';

export const IcBalance = ({ color = colors.GraySecondary }: { color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
      <path
        d="M20.916 6.75h-15a.75.75 0 010-1.5h12.75a.75.75 0 100-1.5H5.916A2.25 2.25 0 003.666 6v12a2.25 2.25 0 002.25 2.25h15a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5zm0 12h-15a.75.75 0 01-.75-.75V8.122c.241.085.495.128.75.128h15v10.5zm-4.5-5.625a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
        fill={color}
      />
    </svg>
  );
};
