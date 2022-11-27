import express from "express";

import { db } from "./config/db.js";
import userRoute from "./routes/user.js"
import diaryRoute from "./routes/diary.js"

import dotenv from "dotenv";

dotenv.config();
db();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/user", userRoute)
app.use("/api/diary", diaryRoute)

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
