import {Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from '../models/product';

export const AddProductController = {
  post: async (req: Request, res: Response) => {
    const { name, precio } = req.body;

    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name,
      precio
  });

  return product
      .save()
      .then((product) => res.status(201).json({ product }))
      .catch((error) => res.status(500).json({ error }));
 }
};
