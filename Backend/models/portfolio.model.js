import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  github: {
    type: String,
  },
  skills: [String],
  projects: [{ title: String, link: String }],
});

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
