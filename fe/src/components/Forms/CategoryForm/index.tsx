import { UseFormRegister } from 'react-hook-form';

import { CategorySchema } from './useCategoryForm';

import { FormGroup } from '../../FormGroup';
import { Input } from '../../Input';

import { Container } from './styles';

interface CategoryFormProps {
  register: UseFormRegister<CategorySchema>;
}

export function CategoryForm({ register }: CategoryFormProps) {
  return (
    <Container>
      <FormGroup label="Emoji" htmlFor="icon">
        <Input
          type="text"
          id="icon"
          placeholder="Ex: 🧀"
          autoComplete="icon"
          {...register('icon')}
        />
      </FormGroup>

      <FormGroup label="Nome da categoria" htmlFor="name">
        <Input
          type="text"
          id="name"
          placeholder="Ex: Lanches"
          autoComplete="name"
          {...register('name')}
        />
      </FormGroup>
    </Container>
  );
}
