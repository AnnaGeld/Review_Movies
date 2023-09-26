import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    },
    avgRating: {
      type: Number,
      required: true,
    },
    totalRating: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
