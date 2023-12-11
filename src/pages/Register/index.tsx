import { useCallback, useState } from 'react';

import { Card, FormRegisterPure } from '@/components';
import type { FieldName, RegisterData } from '@/types';
import { isPasswordValid } from '@/utils';

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
  });

  const handleFieldChange = useCallback(
    (fieldName: FieldName, value: string) => {
      setRegisterData(prevRegisterData => ({
        ...prevRegisterData,
        [fieldName]: value,
      }));
    },
    [],
  );

  const handleSubmit = () => {
    console.log(registerData);
  };

  const passwordRequirements = [
    {
      condition: isPasswordValid(registerData.password),
      text: 'At least 8 characters',
    },
    {
      condition: /[A-Z]/.test(registerData.password),
      text: 'At least 1 uppercase letter',
    },
    {
      condition: /[a-z]/.test(registerData.password),
      text: 'At least 1 lowercase letter',
    },
    {
      condition:
        /[0-9]/.test(registerData.password) ||
        /[!@#$%^&*(),.?":{}|<>]/.test(registerData.password),
      text: 'At least 1 number or special character',
    },
  ];

  return (
    <Card>
      <FormRegisterPure
        showPassword={showPassword}
        registerData={registerData}
        handleFieldChange={handleFieldChange}
        toggleShowPassword={() => setShowPassword(!showPassword)}
        onSubmit={handleSubmit}
        passwordRequirements={passwordRequirements}
      />
    </Card>
  );
};
