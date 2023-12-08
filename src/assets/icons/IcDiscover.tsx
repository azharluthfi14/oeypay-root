import { colors } from '@/constants';

export const IcDiscover = ({ color = colors.GraySecondary }: { color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
      <path opacity={0.2} d="M15.333 6.75v13.5l-6-3V3.75l6 3z" fill="#596780" />
      <path
        d="M21.794 4.658a.75.75 0 00-.643-.136l-5.73 1.433-5.752-2.876a.75.75 0 00-.518-.057l-6 1.5a.75.75 0 00-.568.728v13.5a.75.75 0 00.932.727l5.73-1.432 5.752 2.876a.763.763 0 00.518.056l6-1.5a.75.75 0 00.568-.727V5.25a.75.75 0 00-.289-.592zm-11.711.305l4.5 2.25v11.824l-4.5-2.25V4.963zm-6 .873l4.5-1.125v11.953l-4.5 1.125V5.836zm16.5 12.328l-4.5 1.125V7.336l4.5-1.125v11.953z"
        fill={color}
      />
    </svg>
  );
};
