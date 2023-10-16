import mongoose from "mongoose";

const { Schema } = mongoose;

const withdrawalSchema = new Schema(
  {
    withdrawalAmount: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Withdrawal ||
  mongoose.model("Withdrawal", withdrawalSchema);
