import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  profilePic: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  currentBox: { type: Number, default: 1 },
});

export default mongoose.model("User", UserSchema);
