const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

const login = async (req, res, next) => {
  const loginInfo = req.body;
  const { email, password } = loginInfo;

  try {
    if (email === undefined || email === null || email === "") {
      res.status(401).json({
        status: 401,
        message: "Action denied. The email is required",
      });
    }
    if (password === undefined || password === null || password === "") {
      res.status(401).json({
        status: 401,
        message: "Action denied. The password is required",
      });
    }
    const loggedUser = await User.find(
      { email: email } && { password: password }
    );
    if (loggedUser.lenght !== 0) {
      token = jwt.sign(
        { email: email, role: loggedUser[0].role },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        status: 200,
        message: "Successful action. The user has been authenticated",
        data: token,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: "Action failed. The user has not been authenticated",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
