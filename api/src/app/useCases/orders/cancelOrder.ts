import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    const orderExists = await Order.findById(orderId);
    if (!orderExists) {
      return res.status(400).json({ error: 'This order does not exists' });
    }

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
