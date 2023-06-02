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

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const updateUser = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { ...updateUser } }
    );
    if (updatedUser === null) {
      res.status(404).json({
        status: 404,
        message: "Action failed. ID not found, the user does not exist",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Successful action. The user has been updated",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
