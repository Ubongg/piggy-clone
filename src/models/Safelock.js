import mongoose from "mongoose";

const { Schema } = mongoose;

const safelockSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    paybackDate: {
      type: Date,
      required: true,
    },
    status: {
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

export default mongoose.models.Safelock ||
  mongoose.model("Safelock", safelockSchema);
