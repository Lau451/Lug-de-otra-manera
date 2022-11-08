import { Request, Response } from "express";
import Cart from "../models/cart";

export const PatchProductCartController = {
  patch: async (req: Request, res: Response) => {
    const productCartId = req.params.cartId;

    return Cart.findById(productCartId)
      .then((productCart) => {
        if (productCart) {
          productCart.set(req.body);

          return productCart
            .save()
            .then((productCart) => res.status(201).json({ productCart }))
            .catch((error) => res.status(500).json({ error }));
        } else {
          return res
            .status(404)
            .json({ message: "No se encontró el producto" });
        }
      })
      .catch((error) => res.status(500).json({ error }));
  },
};
