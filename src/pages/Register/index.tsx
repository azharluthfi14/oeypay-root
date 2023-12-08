import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { LoginSchema } from '@/components';
import { FormRegister } from '@/components';
export const RegisterPage = () => {
  const { handleSubmit, control } = useForm<LoginSchema>();
  const onSubmit: SubmitHandler<LoginSchema> = data => console.log(data);
  return <FormRegister control={control} handleSubmit={handleSubmit(onSubmit)} />;
};
