export interface Category {
  _id: string;
  name: string;
  icon: string;
}

export type CategoryRequest = Omit<Category, '_id'>
