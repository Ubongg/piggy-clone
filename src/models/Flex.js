import mongoose from "mongoose";

const { Schema } = mongoose;

const flexSchema = new Schema(
  {
    amount: {
      type: Number,
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

export default mongoose.models.Flex || mongoose.model("Flex", flexSchema);
