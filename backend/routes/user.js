import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", getSingleUser); // Protected route
router.get("/", getAllUser); // Public route
router.put("/:id", updateUser); // Protected route
router.delete("/:id", deleteUser); // Protected route

export default router;
