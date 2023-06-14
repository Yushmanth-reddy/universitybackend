import mongoose, { Schema } from "mongoose";

const deanSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  UniId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Dean", deanSchema);
