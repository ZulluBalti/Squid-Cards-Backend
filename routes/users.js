import express from "express";
import User from "../models/User.js";
import validateUser from "../validators/user.js";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/create-account", validateUser, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({
      msg: "Invalid request, user data is invalid",
      errors: errors.array(),
    });
  }

  try {
    const prevUser = await User.findOne({ email: req.body.email }).lean();

    if (prevUser) {
      return res.status(409).json("user already exists");
    }

    const user = new User(req.body);
    const result = await user.save();
    return res.status(200).json({
      msg: "successfully created user",
      userData: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("internal server error");
  }
});

export default router;
