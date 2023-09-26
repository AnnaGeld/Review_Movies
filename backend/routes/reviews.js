import express from "express";
import { verifyUser } from "../utilis/verifyToken.js";
import { createReview } from "../controllers/reviewController.js";

const router = express.Router({ mergeParams: true });

router.post("/:movieId", verifyUser, createReview);

export default router;
