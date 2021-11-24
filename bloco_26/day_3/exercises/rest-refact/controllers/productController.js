const express = require("express");
const ProductModel = require("../models/productModel");

const router = express.Router();

router.get("/", async (_req, res, next) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

router.get("/:id", async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);
  if (!product) {
    return next({
      error: {
        status: 404,
        code: "notFound",
        message: "product does not exists in the DB",
      },
    });
  }
  res.send(product);
});

router.post("/", async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    res.send(newProduct);
  } catch (e) {
    return next({
      error: {
        status: 500,
        code: "internalError",
        message: "something went wrong",
      },
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    if (!products) {
      return next({
        error: {
          status: 404,
          code: "notFound",
          message: "product does not exists in the DB",
        },
      });
    }
    res.send(products);
  } catch (e) {
    return next({
      error: {
        status: 500,
        code: "internalError",
        message: "something went wrong",
      },
    });
  }
});

router.put("/:id", async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    res.send(products);
  } catch (e) {
    return next({
      error: {
        status: 500,
        code: "internalError",
        message: "something went wrong",
      },
    });
  }
});

module.exports = router;
