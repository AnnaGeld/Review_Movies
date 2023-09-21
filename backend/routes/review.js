import express from "express";
import {
  getAllReviews,
  createReview,
} from "../controllers/reviewController.js";

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllReviews).post(createReview);

export default router;
