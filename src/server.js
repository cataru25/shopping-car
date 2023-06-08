require("dotenv").config();
const express = require("express");
const mongooseConnection = require("./utils/mongoose");
const { User, Product, Auth } = require("./routes");

const app = express();
app.use(express.json());
app.use("/", User);
app.use("/", Product);
app.use("/", Auth);

const start = async () => {
  try {
    await mongooseConnection;
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
