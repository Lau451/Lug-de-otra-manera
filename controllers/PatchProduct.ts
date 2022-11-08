import { Request, Response } from "express";
import Product from "../models/product";

export const PatchProductController = {
   
    patch: async (req:Request, res:Response) => {

        const productId = req.params.productId;

    return Product.findById(productId)
        .then((product) => {
            if (product) {
                product.set(req.body);

                return product
                    .save()
                    .then((product) => res.status(201).json({ product }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'No se encontró el producto' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
}
    }
