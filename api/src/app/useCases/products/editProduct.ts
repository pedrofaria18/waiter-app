import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { Category } from '../../models/Category';

export async function editProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { name, description, price, category, ingredients } = req.body;

    const productExists = await Product.findById(productId);
    if (!productExists) {
      return res.status(400).json({ error: 'This Product does not exists' });
    }

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

    const productNameAlreadyExists = await Product.findOne({
      name,
      _id: { $ne: productId },
    });
    if (productNameAlreadyExists) {
      return res
        .status(400)
        .json({ error: 'This Product name already exists' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, { name, description, price, category, ingredients });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
