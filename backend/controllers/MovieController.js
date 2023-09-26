import Movie from "../models/MovieSchema.js";

//Create new Movie
export const createMovie = async (req, res) => {
  const newMovie = new Movie(req.body);

  try {
    const savedMovie = await newMovie.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedMovie,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again!" });
  }
};

//Update Movie
export const updateMovie = async (req, res) => {
  const id = req.params.id;

  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateMovie,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

//Delete Movie
export const deleteMovie = async (req, res) => {
  const id = req.params.id;

  try {
    await Movie.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

//Getsingle Movie
export const getSingleMovie = async (req, res) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findById(id).populate("reviews");

    res
      .status(200)
      .json({ success: true, message: "Successfully", data: movie });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//Get All Movies

export const getAllMovie = async (req, res) => {
  //For pagination
  const page = parseInt(req.query.page);

  //console.log(page)

  try {
    const movies = await Movie.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: movies.length,
      message: "Successfully",
      data: movies,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: `Not Found${error}` });
  }
};

// Get Movie by search
export const getMovieBySearch = async (req, res) => {
  // hear 'i' means case sensitive
  const name = new RegExp(req.query.name, "i");

  try {
    // gte means greater than equal
    const movies = await Movie.find({ name }).populate("reviews");

    res
      .status(200)
      .json({ success: true, message: "Successfully", data: movies });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//Get Movie count
export const getMovieCount = async (req, res) => {
  try {
    const MovieCount = await Movie.estimatedDocumentCount();

    res.status(200).json({ success: true, data: MovieCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};
