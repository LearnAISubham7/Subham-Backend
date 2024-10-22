// require("dotenv").config({ path: "./env" });

import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("Error", (error) => {
      console.log("Error ", error);
      throw error;
    });
    app.get("/", (req, res) => {
      res.send("hey");
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONDODB_URI}/${DB_NAME}`);
    app.on("Error", (error) => {
      console.log("Error ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listing on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
})();
*/
