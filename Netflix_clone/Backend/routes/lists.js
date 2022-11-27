import express from "express";
const router = express.Router();

import { createList, deleteList, getList } from "../controllers/listController.js";
import { verify } from "../middleware/authMiddleware.js"


router.post("/", verify, createList);
router.delete("/:id", verify, deleteList);
router.get("/", verify, getList);


export default router;