import { body } from "express-validator";

export default [
  body("frontSide").not().isEmpty().escape(),
  body("backSide").not().isEmpty().escape(),
];
