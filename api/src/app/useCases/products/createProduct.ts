import { Request, Response } from 'express';

import { Product } from '../../models/Product';
import { Category } from '../../models/Category';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;

    const { name, description, price, category, ingredients } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    if (!price) {
      return res.status(400).json({
        error: 'Price is required',
      });
    }

    if (!category) {
      return res.status(400).json({
        error: 'Category is required',
      });
    }

    const categoryExists = await Category.findById(category);
    if (category && !categoryExists) {
      return res.status(400).json({
        error: 'Invalid category',
      });
    }

    const productNameAlreadyExists = await Product.findOne({ name });
    if (productNameAlreadyExists) {
      return res.status(400).json({
        error: 'This product name already exists',
      });
    }

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients) || [],
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
