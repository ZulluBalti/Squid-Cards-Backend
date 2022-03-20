import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CardSchema = new Schema({
  frontSide: { type: String, required: true },
  backSide: { type: String, required: true },
  userId: { type: ObjectId, required: true },
  dateCreated: { type: Date, default: () => new Date() },
  lastCorrect: Date,
});

export default mongoose.Model("Card", CardSchema);
