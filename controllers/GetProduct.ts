import { Request, Response } from 'express';

import Product from '../models/product';

export const GetProductController = {
  get: async (req: Request, res: Response) => {
    
    return Product.find()
        .then((products) => res.status(200).json({ products }))
        .catch((error) => res.status(500).json({ error }));
 }
};