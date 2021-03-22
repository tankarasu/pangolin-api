import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  age: { type: Number },
  family: { type: String, required: true },
  race: { type: String, required: true },
  feed: { type: String, required: true },
  friends: { type: Array },
  connected: { type: Boolean },
});

let users = mongoose.model("user", UserSchema);

export { users };
