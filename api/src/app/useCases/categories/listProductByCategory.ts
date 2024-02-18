import { Request, Response } from 'express';

import { Product } from '../../models/Product';
import { Category } from '../../models/Category';

export async function listProductByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const categoryExists = await Category.findById(categoryId);
    if (!categoryExists) {
      return res.status(400).json({ error: 'This category does not exists' });
    }

    const products = await Product.find().where('category').equals(categoryId);

    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
