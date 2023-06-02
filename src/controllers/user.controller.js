const { User } = require("../models/user.model");

const getAllUsers = async (_, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      status: 200,
      message: "Successful action. The user list has been obtained",
      data: allUsers,
    });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json({
      status: 201,
      message: "Successful action. The user has been created",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
