require("dotenv").config();
const express = require("express");
const mongooseConnection = require("./utils/mongoose");
const app = express();

const start = async () => {
  try {
    await mongooseConnection;
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
