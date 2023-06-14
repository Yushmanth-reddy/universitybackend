import mongoose, { Schema } from "mongoose";

const SessionSchema = Schema({
  deanId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  studentId: {
    type: String,
  },
  studentName: {
    type: String,
  },
});

export default mongoose.model("Session", SessionSchema);
