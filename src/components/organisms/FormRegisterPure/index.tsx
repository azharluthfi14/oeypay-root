import type { ChangeEvent } from 'react';

import { IcEyeClose, IcEyeOpen } from '@/assets';
import { Button, Input, Label, PasswordHelper } from '@/components';
import type { FieldName } from '@/types';

interface FormRegisterPureProps<T extends FieldName> {
  registerData: {
    email: string;
    password: string;
  };
  handleFieldChange: (field: T, value: string) => void;
  showPassword: boolean;
  toggleShowPassword: () => void;
  onSubmit: () => void;
  passwordRequirements: {
    condition: boolean;
    text: string;
  }[];
}

export const FormRegisterPure = ({
  handleFieldChange,
  registerData,
  showPassword,
  toggleShowPassword,
  onSubmit,
  passwordRequirements,
}: FormRegisterPureProps<FieldName>) => {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label>Email address</Label>
        <Input
          value={registerData.email}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleFieldChange('email', event.target.value)
          }
          placeholder="Email address"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label>Password</Label>
        <div className="relative">
          <Input
            placeholder="Password"
            value={registerData.password}
            type={showPassword ? 'text' : 'password'}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange('password', event.target.value)
            }
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-3  bottom-2.5 right-3.5 z-10 flex items-center justify-center rounded-full p-1">
            {showPassword ? <IcEyeOpen /> : <IcEyeClose />}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Confirm Password</Label>
        <div className="relative">
          <Input
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-3  bottom-2.5 right-3.5 z-10 flex items-center justify-center rounded-full p-1">
            {showPassword ? <IcEyeOpen /> : <IcEyeClose />}
          </button>
        </div>
      </div>
      <div className="mt-5">
        <PasswordHelper requirements={passwordRequirements} />
      </div>
      <div>
        <Button className="w-full" type="button" onClick={onSubmit}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};
