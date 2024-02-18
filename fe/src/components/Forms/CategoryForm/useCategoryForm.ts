import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Category } from '../../../types/Category';

const categorySchema = z.object({
  name: z.string(),
  icon: z.string().emoji(),
});

export type CategorySchema = z.infer<typeof categorySchema>;

export function useCategoryForm(category?: Category | null) {
  const { register, handleSubmit, watch } = useForm<CategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      icon: category?.icon,
      name: category?.name,
    },
  });

  const watchedValues = watch();
  const isFormFilled = !Object.values(watchedValues).every(
    (value) => value !== '' && value !== undefined
  );

  return {
    register,
    handleSubmit,
    isFormFilled,
  };
}
