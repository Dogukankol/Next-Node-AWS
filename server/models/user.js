import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: 'member'
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;