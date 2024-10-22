// require("dotenv").config({ path: "./env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

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
