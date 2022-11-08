import { Request, Response } from 'express';
import Product from '../models/product';

export const DeleteProductController = {
  delete: async (req: Request, res: Response) => {
    
    const productId = req.params.productId;

    return Product.findByIdAndDelete(productId)
        .then((product) => (product ? res.status(201).json({ product, message: 'Este producto ha sido borrado' }) : res.status(404).json({ message: 'No encontrado' })))
        .catch((error) => res.status(500).json({ error }));
 }
};