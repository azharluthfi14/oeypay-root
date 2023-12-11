import { useCallback } from 'react';

interface PasswordStrengthMeterProps {
  password: string;
}

export const PasswordStrengthMeter = ({ password }: PasswordStrengthMeterProps) => {
  const calculatePasswordStrength = useCallback((value: string) => {
    const weakRegex = /^.{1,7}$/;
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (weakRegex.test(value)) {
      return 'Lemah';
    } else if (strongRegex.test(value)) {
      return 'Kuat';
    } else {
      return 'Sedang';
    }
  }, []);

  const getBarColors = () => {
    if (password.length === 0) {
      return ['bg-gray-300', 'bg-gray-300', 'bg-gray-300', 'bg-gray-300']; // Warna awal ketika password kosong
    }

    const strength = calculatePasswordStrength(password);

    if (password.length < 8) {
      return ['bg-red-500', 'bg-gray-300', 'bg-gray-300', 'bg-gray-300'];
    } else if (strength === 'Sedang') {
      return ['bg-red-500', 'bg-yellow-500', 'bg-gray-300', 'bg-gray-300'];
    } else if (strength === 'Kuat') {
      return ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-gray-300'];
    } else {
      return ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'];
    }
  };

  const barWidths = password.split('').map(() => 100 / password.length);

  return (
    <div>
      {password && (
        <div className="">
          {barWidths.map((width, index) => (
            <div
              key={index}
              className={`h-2 flex-1 transition-all duration-300 ${
                getBarColors()[index]
              }`}
              style={{ width: `${width}%` }}></div>
          ))}
          <strong>Kekuatan Kata Sandi:</strong> {calculatePasswordStrength(password)}
        </div>
      )}
    </div>
  );
};
