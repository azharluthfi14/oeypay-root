import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { LoginSchema } from '@/components';
import { Button, Card, Input, Label } from '@/components';
import { LoginValidation } from '@/libs';
export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(LoginValidation),
    mode: 'onTouched',
    defaultValues: {
      emailAddress: '',
    },
  });

  const onSubmitHandler: SubmitHandler<LoginSchema> = values => {
    console.log(values);
  };

  return (
    <Card className="relative overflow-y-hidden">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col justify-between h-[calc(100vh_-_60px)]">
        <div className="space-y-2">
          <div className="space-y-2">
            <div className="space-y-2">
              <Label
                className={errors.emailAddress && 'text-red-500'}
                htmlFor="email">
                Email address
              </Label>
              <Input
                {...register('emailAddress')}
                name="emailAddress"
                placeholder="Email address"
                className={errors.emailAddress && 'border-red-500'}
              />

              {errors.emailAddress && (
                <span className="text-xs text-red-500">
                  {errors.emailAddress?.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};
