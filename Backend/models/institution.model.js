import mongoose from "mongoose";

const institutionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Institution = mongoose.model("Institution", institutionSchema);
