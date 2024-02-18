import { Request, Response } from 'express';

import { io } from '../../../index';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    if(!table) {
      return res.status(400).json({
        error: 'Table is required',
      });
    }

    if(!products) {
      return res.status(400).json({
        error: 'Products is required',
      });
    }

    const order = await Order.create({ table, products });

    const orderDetails = await Order.findById(order._id).populate({
      path: 'products.product',
      populate: {
        path: 'ingredients',
        model: 'Ingredient' // Substitua 'Ingredient' pelo nome do modelo de ingrediente
      }
    });

    io.emit('orders@new', orderDetails);


    res.status(201).json(orderDetails);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
