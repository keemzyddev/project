import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import moviesRouter from "./routes/movies.js";
import listsRouter from "./routes/lists.js";

dotenv.config();
connectDB();

const app = express();

// app.use(cors());

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ extended: true, limit: "30mb" }));

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/lists", listsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
