import {Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from '../models/product';

export const AddProductController = {
  post: async (req: Request, res: Response) => {

    const { name,precio} = req.body;
  const product = new Product({ name, precio });
  if (product) {
    res.json({ msg: `El producto ${name} ha sido agregado` });
    await product.save();
  }
}
}
