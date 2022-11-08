import { Request, Response } from "express";

import Cart from "../models/cart";

export const DeleteProductCartController = {
  delete: async (req: Request, res: Response) => {
    const productCartId = req.params.cartId;

    return Cart.findByIdAndDelete(productCartId)
      .then((productCart) =>
        productCart
          ? res
              .status(201)
              .json({ productCart, message: "Este producto ha sido borrado" })
          : res.status(404).json({ message: "No encontrado" })
      )
      .catch((error) => res.status(500).json({ error }));
  },
};
