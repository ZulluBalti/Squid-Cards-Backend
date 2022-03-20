import mongoose from "mongoose";

import "dotenv/config";
import UserRouter from "./routes/users.js";
import CardRouter from "./routes/cards.js";

import express from "express";
const app = express();

const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (err) {
    console.error(err);
  }

  mongoose.connection.on("error", (err) => {
    console.error(err);
  });

  app.use(express.json());
  app.use("/users/", UserRouter);
  app.use("/cards/", CardRouter);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
};

main();
