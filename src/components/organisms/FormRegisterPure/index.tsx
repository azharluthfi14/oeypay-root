import type { ChangeEvent } from 'react';

import { Link } from 'react-router-dom';

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
    <form className="flex h-[calc(100vh_-_130px)] flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>Email</Label>
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
            <Input placeholder="Password" type={showPassword ? 'text' : 'password'} />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute inset-y-3  bottom-2.5 right-3.5 z-10 flex items-center justify-center rounded-full p-1">
              {showPassword ? <IcEyeOpen /> : <IcEyeClose />}
            </button>
          </div>
        </div>
        {/* <PasswordStrengthMeter password={registerData.password} /> */}
        <div className="mt-3">
          <PasswordHelper requirements={passwordRequirements} />
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center gap-1">
          <Input
            type="checkbox"
            id="aggrement"
            className="h-3 w-3 cursor-pointer rounded-full bg-slate-400 text-green"
          />
          <Label htmlFor="aggrement" className="text-xs font-light text-gray2">
            By proceeding this, you agree to these
            <Link to={'/terms'} className=" text-yellow">
              Term and Conditions
            </Link>
          </Label>
        </div>
        <Button className="mb-4 w-full" type="button" onClick={onSubmit}>
          Register
        </Button>
        <div className="text-center text-gray2">
          Already have an Account?
          <Link to={'/login'} className="ml-1 text-yellow">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};
