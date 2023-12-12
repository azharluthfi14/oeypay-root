import { type FC, memo } from 'react';

import { getPasswordScore } from '@/utils';

interface PasswordStrengthMeterProps {
  inputValue: string;
}

export const PasswordStrengthMeter: FC<PasswordStrengthMeterProps> = memo(
  ({ inputValue }) => {
    const passwordScore = getPasswordScore(inputValue);

    return (
      <div className="h-1.5 w-full rounded-full bg-gray-200">
        <div
          role="progressbar"
          className={`h-1.5 overflow-hidden rounded-full transition-all duration-200 ease-in-out ${
            passwordScore === 0
              ? 'bg-gray-200'
              : passwordScore === 1
                ? 'bg-red-400'
                : passwordScore === 2
                  ? 'bg-orange-400'
                  : passwordScore === 3
                    ? 'bg-yellow'
                    : 'bg-green'
          }`}
          style={{ width: `${(passwordScore / 4) * 100}%` }}
        />
      </div>
    );
  },
);
