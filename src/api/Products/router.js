import express from "express";

import {
  createProdunct,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
} from "./controller";

export const productRouter = express.Router();

productRouter.post("/products", createProdunct);

productRouter.put("/products:id", updateProduct);

productRouter.get("/products", getAllProducts);

productRouter.get("/products:id", getProductById);

productRouter.delete("/products:id", deleteProductById);
