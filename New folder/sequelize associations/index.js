const express = require ("express");
const mysql2 = require ("mysql2");
const cors = require ("cors");
const Sequelize = require ("sequelize");
const userRouter = require ("./routes/user.js");
const contactRouter = require ("./routes/contact.js");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/user", userRouter);
app.use("/contact", contactRouter);

app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
