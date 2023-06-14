import mongoose, { Schema } from "mongoose";

const studentSchema = Schema({
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
  DeanId: {
    type: Number,
  },
});

export default mongoose.model("Student", studentSchema);
