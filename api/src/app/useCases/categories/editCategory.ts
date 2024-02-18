import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function editCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { name, icon } = req.body;

    const categoryExists = await Category.findById(categoryId);
    if (!categoryExists) {
      return res.status(400).json({ error: 'This category does not exists' });
    }

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    const categoryNameAlreadyExists = await Category.findOne({
      name,
      _id: { $ne: categoryId },
    });
    if (categoryNameAlreadyExists) {
      return res
        .status(400)
        .json({ error: 'This category name already exists' });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      {
        name,
        icon,
      },
      { new: true }
    );

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
