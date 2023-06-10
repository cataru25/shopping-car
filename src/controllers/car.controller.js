const { Car } = require("../models/car.model");

const getAllProducts = async (req, res, next) => {
  console.log("@getAllProducts: ");
  //   try {
  //     const allProducts = await Product.find();
  //     res.status(200).json({
  //       status: 200,
  //       message: "Successful action. The product list has been obtained",
  //       data: allProducts,
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
};

const addToCar = async (req, res, next) => {
  const productUserInfo = req.body;
  const { productId, quantity } = productUserInfo;
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
  const newProduct = new Car(req.body);
  try {
    await newProduct.save();
    res.status(201).json({
      status: 201,
      message:
        "Successful action. The product has been added to the shopping car",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

// const createProduct = async (req, res, next) => {
//   const newProduct = new Product(req.body);
//   try {
//     await newProduct.save();
//     res.status(201).json({
//       status: 201,
//       message: "Successful action. The product has been created",
//       data: newProduct,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const updateQuantityProduct = async (req, res, next) => {
  console.log("@updateQuantityProduct: ");
  //   const { productId } = req.params;
  //   const updateInfo = req.body;
  //   try {
  //     const updatedProduct = await Product.findOneAndUpdate(
  //       { _id: productId },
  //       { $set: { ...updateInfo } }
  //     );
  //     if (updatedProduct === null) {
  //       res.status(404).json({
  //         status: 404,
  //         message: "Action failed. ID not found, the product does not exist",
  //       });
  //     } else {
  //       res.status(200).json({
  //         status: 200,
  //         message: "Successful action. The product has been updated",
  //       });
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
};

const deleteProductFromCar = async (req, res, next) => {
  console.log("@deleteProductFromCar: ");
  //   const { productId } = req.params;
  //   try {
  //     const deletedProduct = await Product.findByIdAndRemove(productId);
  //     if (deletedProduct === null) {
  //       res.status(404).json({
  //         status: 404,
  //         message: "Action failed. ID not found, the product does not exist",
  //       });
  //     } else {
  //       res.status(200).json({
  //         status: 200,
  //         message: "Successful action. The product has been deleted",
  //       });
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
};

module.exports = {
  getAllProducts,
  addToCar,
  updateQuantityProduct,
  deleteProductFromCar,
};
