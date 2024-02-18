import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    const categoryNameAlreadyExists = await Category.findOne({ name });
    if (categoryNameAlreadyExists) {
      return res.status(400).json({
        error: 'This category name already exists',
      });
    }

    const category = await Category.create({ icon, name });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
