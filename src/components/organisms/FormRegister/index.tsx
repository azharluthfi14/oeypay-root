import type { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type * as z from 'zod';

import { Card, Input, Label } from '@/components';
import type { LoginValidation } from '@/libs';

export const FormRegister = ({ handleSubmit, control }: FormRegisterProps) => {
  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
              <div className="space-y-2">
                <Label>Email address</Label>
                <Input
                  type="email"
                  placeholder="Email address"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>
            )}
          />
        </div>
        <div className="space-y-2">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </div>
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

type FormRegisterProps = {
  handleSubmit: () => void;
  control: Control<LoginSchema>;
};

export type LoginSchema = z.infer<typeof LoginValidation>;
