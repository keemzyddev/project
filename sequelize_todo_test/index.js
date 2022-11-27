const express = require ("express");
const mysql2 = require ("mysql2");
const cors = require ("cors");
const Sequelize = require ("sequelize");
const db = require ("./config/database.js");
const todoRouter = require ("./routes/todo.js");

//test db
// db.authenticate()
//   .then(() => console.log("Connection has been established successfully..."))
//   .catch((err) => console.log("Unable to connect to the database:", err));

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/todo", todoRouter);

app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
