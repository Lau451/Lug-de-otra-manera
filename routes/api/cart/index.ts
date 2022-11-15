import { Router } from "express";

import { GetProductCartController } from "../../../controllers/GetProductCart";
import { AddProductCartController } from "../../../controllers/AddProductCart";
import { DeleteProductCartController } from "../../../controllers/DeleteProductCart";
import { PatchProductCartController } from "../../../controllers/PatchProductCart";

const router = Router();

router.get("/", GetProductCartController.get);
router.post("/:id", AddProductCartController.post);
router.delete("/:cartId", DeleteProductCartController.delete);
router.patch("/:cartId", PatchProductCartController.patch);

export default router;
