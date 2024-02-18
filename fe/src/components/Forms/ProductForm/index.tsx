import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import imageIcon from '../../../assets/images/image.svg';
import noImageIcon from '../../../assets/images/no-image.svg';


import { ProductSchema, useProductForm } from './useProductForm';

import { FormGroup } from '../../FormGroup';
import { Input } from '../../Input';

import {
  Column,
  Container,
  InputContainer,
  CategoryContainer,
  CategoryItem,
  IngredientContainer,
  IngredientItem,
  ImageInput,
} from './styles';

interface ProductFormProps {
  register: UseFormRegister<ProductSchema>;
  watch: UseFormWatch<ProductSchema>;
  setValues: UseFormSetValue<ProductSchema>;
}

export function ProductForm({ register, watch, setValues }: ProductFormProps) {
  const { categories, ingredients } = useProductForm();

  console.log(watch());

  return (
    <Container>
      <Column>
        <strong>Imagem</strong>

        <ImageInput>
          {/* {imagePreview ? (
            <img src={imagePreview} alt="Imagem selecionada" />
          ) : ( */}
          <div>
            <img src={noImageIcon} alt="Sem imagem" width={24} height={24} />
          </div>

          <label htmlFor="imagePath">
            <img src={imageIcon} alt="Ícone de imagem" />
            Alterar Imagem
          </label>
          <input
            type="file"
            id="imagePath"
            accept="image/*"
            {...register('imagePath')}
          />
        </ImageInput>

        <FormGroup label="Nome do produto" htmlFor="name">
          <Input
            type="text"
            id="name"
            placeholder="Ex: Quatro Queijos"
            autoComplete="name"
            {...register('name')}
          />
        </FormGroup>

        <FormGroup label="Description" htmlFor="description">
          <Input
            type="text"
            id="description"
            placeholder="Ex: Quatro Queijos"
            autoComplete="description"
            {...register('description')}
          />
        </FormGroup>

        <FormGroup label="Preço" htmlFor="price">
          <Input
            type="text"
            id="price"
            placeholder="Ex: R$20,00"
            autoComplete="price"
            {...register('price')}
          />
        </FormGroup>

        <InputContainer>
          <span>Categoria</span>
          <CategoryContainer>
            {categories.map((category) => (
              <CategoryItem
                key={category.name}
                onClick={() => setValues('category', category._id)}
                active={category._id === watch('category')}
              >
                {category.icon} &nbsp; {category.name}
              </CategoryItem>
            ))}
          </CategoryContainer>
        </InputContainer>
      </Column>

      <Column>
        <strong>Ingredients</strong>

        <InputContainer>
          <FormGroup label="Busque o ingrediente" htmlFor="ingredient">
            <Input
              type="text"
              id="ingredient"
              placeholder="Ex: Quatro Queijos"
              autoComplete="ingredient"
            />
          </FormGroup>

          <IngredientContainer>
            {ingredients.map((ingredient) => (
              <IngredientItem htmlFor={ingredient.name} key={ingredient.name}>
                {ingredient.icon} &nbsp; {ingredient.name}
                <input
                  type="checkbox"
                  name={ingredient.name}
                  id={ingredient.name}
                />
              </IngredientItem>
            ))}
          </IngredientContainer>
        </InputContainer>
      </Column>
    </Container>
  );
}
