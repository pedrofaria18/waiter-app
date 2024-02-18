import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Product } from '../../../types/Product';
import { useEffect, useState } from 'react';
import { Category } from '../../../types/Category';
import { api } from '../../../utils/api';
import { Ingredient } from '../../../types/Ingredient';

const productSchema = z.object({
  imagePath: z.string(),
  name: z.string(),
  description: z.string().max(110),
  price: z.number(),
  category: z.string(),
  ingredients: z.string().array(),
});

export type ProductSchema = z.infer<typeof productSchema>;

export function useProductForm(product?: Product | null) {
  const { register, handleSubmit, watch, setValue } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      imagePath: product?.imagePath,
      name: product?.name,
      description: product?.description,
      price: product?.price,
      category: product?.category._id,
      ingredients: product?.ingredients.map((ingredient) => ingredient._id),
    },
  });

  const watchedValues = watch();
  const isFormFilled = !Object.values(watchedValues).every(
    (value) => value !== '' && value !== undefined
  );

  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    api.get('/categories').then(({ data }) => setCategories(data));
  }, []);

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  useEffect(() => {
    api.get('/ingredients').then(({ data }) => setIngredients(data));
  }, []);

  return {
    register,
    handleSubmit,
    isFormFilled,
    watch,
    setValue,
    categories,
    ingredients,
  };
}
