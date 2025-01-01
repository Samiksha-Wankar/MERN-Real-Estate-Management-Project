import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requieed: true,
      unique: true,
    },
    email: {
      type: String,
      requieed: true,
      unique: true,
    },
    password: {
      type: String,
      requieed: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
