import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find().populate('ingredients').populate('category');

    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
