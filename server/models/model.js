import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);
export default User;
