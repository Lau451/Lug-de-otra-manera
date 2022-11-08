import { Request, Response } from 'express';

import Cart from '../models/cart';

export const GetProductCartController = {
  get: async (req: Request, res: Response) => {
    
    return Cart.find()
        .then((productsincart) => res.status(200).json({ productsincart }))
        .catch((error) => res.status(500).json({ error }));
 }
};