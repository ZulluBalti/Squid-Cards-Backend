import express from "express";
const router = express.Router();
import { validationResult } from "express-validator";
import validateCard from "../validators/card.js";

router.post("/create-card", validateCard, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res
      .status(403)
      .json({ msg: "invalid input", errors: errors.array() });
  }
});

export default router;
