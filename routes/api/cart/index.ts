import { Router } from "express";


import { GetProductCartController } from "../../../controllers/GetProductCart";
import { AddProductCartController } from "../../../controllers/AddProductCart";
import { DeleteProductCartController } from "../../../controllers/DeleteProductCart";


const router = Router()

router.get("/", GetProductCartController.get);
router.post("/", AddProductCartController.post);
router.delete("/:cartId", DeleteProductCartController.delete);


export default router;