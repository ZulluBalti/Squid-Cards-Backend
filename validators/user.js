import { body } from "express-validator";

export default [
  body("username").not().isEmpty().escape(),
  body("email").isEmail().normalizeEmail(),
  body("profilePic").not().isEmpty().escape(),
];
