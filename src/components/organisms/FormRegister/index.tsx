import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Button, Card, Input, Label } from '@/components';
import { type RegisterSchema, RegisterValidation } from '@/libs';

type FormRegisterProps = {
  onSubmit: SubmitHandler<RegisterSchema>;
};

export const FormRegister = ({ onSubmit }: FormRegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(RegisterValidation),
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });
  return (
    <Card className="relative overflow-y-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-[calc(100vh_-_60px)]">
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              placeholder="Email address"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
        </div>
        <Button type="button" className="w-full">
          Submit
        </Button>
      </form>
    </Card>
  );
};
