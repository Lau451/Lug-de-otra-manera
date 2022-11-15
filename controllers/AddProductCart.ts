import { Request, Response } from "express";
import Cart from "../models/cart";
import Product from "../models/product";

export const AddProductCartController = {
  post: async (req:Request, res:Response) => {

    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      const productId = product._id;
      const isInCart = await Cart.findById(productId);
      if (!isInCart) {
        const addProductCart = new Cart({
          name: product.name,
          precio: product.precio,
          cantidad: 1,
        });
        await Product.findByIdAndUpdate(
          product._id,
          {
            enCart: true,
          },
          { new: true }
        )
          .then((p) => {
            addProductCart.save().then(() => {
              res.json({
                msg: `El producto ${product.name} se añadió al carrito`,
              });
            });
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        res
          .status(404)
          .json({ msg: `El producto ${product.name} ya está en el carrito` });
      }
    } else {
      res.status(404).json({ msg: "El producto no existe" });
    }
  }
}