const jwt = require("jsonwebtoken");

exports.isAuth = (role) => {
  if (!role) {
    return (req, res, next) => {
      const token = req.headers.authorization;
      try {
        let decodeToken = jwt.verify(token, process.env.TOKEN_SECRET);

        if (decodeToken.role) {
          next();
        } else {
          res.status(401).json({
            message: "Access forbidden",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(401);
        res.send(error.message || "Access forbidden");
        return;
      }
    };
  }
  return (req, res, next) => {
    const token = req.headers.authorization;
    try {
      let decodeToken = jwt.verify(token, process.env.TOKEN_SECRET);

      if (decodeToken.role === role) {
        next();
      } else {
        res.status(401).json({
          message: "Access forbidden",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      res.send(error.message || "Access forbidden");
      return;
    }
  };
};
