const { Product } = require("../models/product.model");

const getAllProducts = async (_, res, next) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      status: 200,
      message: "Successful action. The product list has been obtained",
      data: allProducts,
    });
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const oneProduct = await Product.find({ _id: productId });
    if (oneProduct.length === 0) {
      res.status(404).json({
        status: 404,
        message: "Action failed. ID not found, the product does not exist",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Successful action. The product has been found",
        data: oneProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.status(201).json({
      status: 201,
      message: "Successful action. The product has been created",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  const updateInfo = req.body;
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: { ...updateInfo } }
    );
    if (updatedProduct === null) {
      res.status(404).json({
        status: 404,
        message: "Action failed. ID not found, the product does not exist",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Successful action. The product has been updated",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (deletedProduct === null) {
      res.status(404).json({
        status: 404,
        message: "Action failed. ID not found, the product does not exist",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Successful action. The product has been deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
