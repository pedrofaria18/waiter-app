import { Category } from './Category';
import { Ingredient } from './Ingredient';

export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredient[];
  category: Category;
}

export interface ProductRequest {
  imagePath: string;
  name: string;
  price: number;
  description: string;
  category: string;
  ingredients: string[];
}
