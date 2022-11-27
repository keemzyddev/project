import { DataTypes } from "sequelize";
import { db } from "./config/database.js";

const Todo = db.define("todo", {
  userId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },

  title: {
    type: DataTypes.STRING,
  },

  reminder: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Todo;
