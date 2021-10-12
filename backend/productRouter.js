import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "./ProductModel.js";
import data from "./data.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.send(product);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProduct = await Product.insertMany(data);
    res.send({ products: createdProduct });
  })
);

productRouter.get(
  "/popularFood",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const product = await Product.find({ rating: { $gt: 4.4 } }).limit(3);
    res.send(product);
  })
);

export default productRouter;
