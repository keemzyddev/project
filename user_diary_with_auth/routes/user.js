import express from "express";
import { getUser, addUser, updateUser, deleteUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUser);
router.post("/register", addUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
