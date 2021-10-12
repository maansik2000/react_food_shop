import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./productRouter.js";

const app = express();

dotenv.config();

const port = 5000;

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/react_Shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`server is ready at localhost:${port}`);
});
