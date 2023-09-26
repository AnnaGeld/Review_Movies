import express from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovie,
  getSingleMovie,
  getMovieBySearch,
  getMovieCount,
  updateMovie,
} from "../controllers/MovieController.js";

import { verifyAdmin } from "../utilis/verifyToken.js";

const router = express.Router();

//Create new Movie
router.post("/", verifyAdmin, createMovie);

//Update Movie
router.put("/:id", verifyAdmin, updateMovie);

//Delete Movie
router.delete("/:id", verifyAdmin, deleteMovie);

//Get single Movie
router.get("/:id", getSingleMovie);

//Get all Movie
router.get("/", getAllMovie);

//Get Movie by search
router.get("/search/getTourBySearch", getMovieBySearch);

router.get("/search/getTourCount", getMovieCount);

export default router;
