const { Car } = require("../models/car.model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const getAllProducts = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
    const carList = await Car.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "products",
        },
      },
      {
        $project: {
          userId: 1,
          productId: 1,
          quantity: 1,
        },
      },
    ]);
    res.status(200).json({
      status: 200,
      message: "The list of products of the specified user has been obtained",
      data: carList,
    });
  } catch (error) {
    next(error);
  }
};

const addToCar = async (req, res, next) => {
  const productUserInfo = req.body;
  const { productId, quantity } = productUserInfo;
  const token = req.headers.authorization;
  if (productId === undefined || productId === null || productId === "") {
    res.status(401).json({
      status: 401,
      message: "Action denied. The product ID is required",
    });
  }
  if (quantity === undefined || quantity === null || quantity === 0) {
    res.status(401).json({
      status: 401,
      message: "Action denied. The quantity is required",
    });
  }
  try {
    const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
    const productAlreadyExists = await Car.find({ productId: productId });
    const addingProduct = {
      userId: userId,
      productId: productId,
      quantity: quantity,
    };
    if (productAlreadyExists.length !== 0) {
      res.status(401).json({
        status: 401,
        message:
          "Action denied. The product alredy exists and it cannot be added again.",
      });
    } else {
      await Car.create(addingProduct);
      res.status(201).json({
        status: 201,
        message:
          "Successful action. The product has been added to the shopping car",
        data: addingProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateQuantityProduct = async (req, res, next) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const token = req.headers.authorization;
  try {
    const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
    const updatedProduct = await Car.findOneAndUpdate(
      { userId: userId } && { productId: productId },
      { $set: { quantity: quantity } }
    );
    if (updatedProduct === null) {
      res.status(404).json({
        status: 404,
        message: "Action failed. ID not found, the product does not exist",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Successful action. The quantity has been updated",
        data: quantity,
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProductFromCar = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Car.findOneAndDelete({ productId: productId });
    if (deletedProduct === null) {
      res.status(404).json({
        status: 404,
        message: "Action failed. ID not found, the product does not exist",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Successful action. The quantity has been deleted",
        data: deletedProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  addToCar,
  updateQuantityProduct,
  deleteProductFromCar,
};
