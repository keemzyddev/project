import express from "express";
const router = express.Router();

import { updateUser, deleteUser, getUser, getAllUser, totalUser } from "../controllers/usersController.js";
import { verify } from "../middleware/authMiddleware.js"

router.put("/:id", verify, updateUser);
router.delete("/:id", verify, deleteUser);
router.get("/find/:id", getUser);
router.get("/", verify, getAllUser);
router.get("/stats", verify, totalUser);

export default router;