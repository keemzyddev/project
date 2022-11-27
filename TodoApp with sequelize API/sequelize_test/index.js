import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import Sequelize from "sequelize";
import { db } from "./config/database.js";
import todoRouter from "./routes/todo.js";

//test db
db.authenticate()
  .then(() => console.log("Connection has been established successfully..."))
  .catch((err) => console.log("Unable to connect to the database:", err));

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/todo", todoRouter);

app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
