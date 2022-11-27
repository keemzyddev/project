import mongoose from "mongoose";

const diarySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Diary = mongoose.model("diary", diarySchema);
