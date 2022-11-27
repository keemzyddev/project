import express from "express";
import { getDiary, addDiary, updateDiary, deleteDiary } from "../controllers/diaryController.js";
import auth from "../middleware/auth.js"

const router = express.Router();

router.get("/", auth, getDiary);
router.post("/", auth, addDiary);
router.patch("/:id", auth, updateDiary);
router.delete("/:id", auth, deleteDiary);

export default router;
