import { useCallback, useState } from 'react';

import { Card, FormRegisterPure, HeaderNavigation } from '@/components';
import type { FieldName, RegisterData } from '@/types';
import { isPasswordValid } from '@/utils';

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
  });

  const handleFieldChange = useCallback((fieldName: FieldName, value: string) => {
    setRegisterData(prevRegisterData => ({
      ...prevRegisterData,
      [fieldName]: value,
    }));
  }, []);

  const handleSubmit = () => {
    console.log(registerData);
  };

  console.log('isPasswordValid', isPasswordValid(registerData.password));

  const passwordRequirements = [
    {
      condition: registerData.password.length >= 6,
      text: 'atleast 6 characters long',
    },
    {
      condition: /[a-z]/.test(registerData.password),
      text: 'atleast one lowercase character',
    },
    {
      condition: /[A-Z]/.test(registerData.password),
      text: 'atleast one uppercase character',
    },
    {
      condition: /[0-9]/.test(registerData.password),
      text: 'atleast one number',
    },
  ];

  return (
    <>
      <HeaderNavigation title="Register" />
      <Card>
        <FormRegisterPure
          showPassword={showPassword}
          registerData={registerData}
          disabledSubmit={!isPasswordValid(registerData.password)}
          handleFieldChange={handleFieldChange}
          toggleShowPassword={() => setShowPassword(!showPassword)}
          onSubmit={handleSubmit}
          passwordRequirements={passwordRequirements}
        />
      </Card>
    </>
  );
};
