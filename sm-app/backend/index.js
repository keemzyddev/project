import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());

const PORT = process.env.process || 5000;

app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ extended: true, limit: "30mb" }));

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(PORT, console.log(`server running on port ${PORT}`));
