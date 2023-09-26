import Movie from "../models/MovieSchema.js";
import Review from "../models/ReviewSchema.js";

export const createReview = async (req, res) => {
  const movieId = req.params.movieId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    // after creating a new review now update the reviews array of the Movie
    await Movie.findByIdAndUpdate(movieId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Failed to submit ${error}` });
  }
};
