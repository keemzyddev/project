const Sequelize = require ("sequelize");
const { DataTypes } = Sequelize;
// const db = require ("./config/database.js");

const db = new Sequelize('test1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

//test db
db.authenticate()
  .then(() => console.log("Connection has been established successfully..."))
  .catch((err) => console.log("Unable to connect to the database:", err));

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

module.exports = Todo;
