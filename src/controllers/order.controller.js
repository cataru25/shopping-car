const { Car } = require("../models/car.model");
const { Order } = require("../models/order.model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const getAllOrders = async (_, res, next) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json({
      status: 200,
      message: "Successful action. The order list has been obtained",
      data: allOrders,
    });
  } catch (error) {
    next(error);
  }
};
const addOrder = async (req, res, next) => {
  const token = req.headers.authorization;
  const { userId, name, email } = jwt.verify(token, process.env.TOKEN_SECRET);
  try {
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
        $unwind: "$products",
      },
      {
        $project: {
          userId: 1,
          productId: 1,
          quantity: 1,
          products: { name: 1, quantity: 1, price: 1 },
        },
      },
    ]);
    let productListByUser = [];
    carList.map((product) => {
      productListByUser.push({
        name: product.products.name,
        quantity: product.products.quantity,
        price: product.products.price,
      });
    });
    const order = await Order.create({
      name: name,
      email: email,
      products: productListByUser,
    });
    res.status(200).json({
      status: 200,
      message: "Successful action. The order has been created.",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllOrders,
  addOrder,
};
