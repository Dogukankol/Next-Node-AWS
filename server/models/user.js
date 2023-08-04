import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  hashed_password: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;