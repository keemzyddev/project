import express from "express";
const router = express.Router();

import { createMovie, updateMovie, deleteMovie, getSingleMovie, getRandomMovie, getAllMovie } from "../controllers/movieController.js";
import { verify } from "../middleware/authMiddleware.js";


router.post("/", verify, createMovie);
router.put("/:id", verify, updateMovie);
router.delete("/:id", verify, deleteMovie);
router.get("/find/:id", verify, getSingleMovie);
router.get("/random", verify, getRandomMovie);
router.get("/", verify, getAllMovie);

export default router;