import { Router } from "express";
import { GetProductController } from "../../../controllers/GetProduct";
import { AddProductController } from "../../../controllers/AddProduct";
import { PatchProductController } from "../../../controllers/PatchProduct";
import { DeleteProductController } from "../../../controllers/DeleteProduct";

const router = Router();

router.get("/", GetProductController.get);

router.post("/", AddProductController.post);

router.patch("/:productId", PatchProductController.patch);

router.delete("/:productId", DeleteProductController.delete);



export default router;
