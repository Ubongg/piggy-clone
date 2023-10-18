import mongoose from "mongoose";

const { Schema } = mongoose;

const activitySchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Activity ||
  mongoose.model("Activity", activitySchema);
