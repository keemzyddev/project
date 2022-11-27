import express from "express";
const router = express.Router();

import { regUser, loginUser } from "../controllers/authController.js";

router.post("/register", regUser);
router.post("/login", loginUser);

export default router;
