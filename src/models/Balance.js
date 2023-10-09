import mongoose from "mongoose";

const { Schema } = mongoose;

const balanceSchema = new Schema(
  {
    accountName: {
      type: String,
      required: true,
    },
    accountBalance: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Balance ||
  mongoose.model("Balance", balanceSchema);
