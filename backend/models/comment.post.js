import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commentSchema);
