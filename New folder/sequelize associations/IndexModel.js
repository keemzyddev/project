const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const db = new Sequelize("test1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//test db
db.authenticate()
  .then(() => console.log("Connection has been established successfully..."))
  .catch((err) => console.log("Unable to connect to the database:", err));

const User = db.define("User", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },

  name: {
    type: DataTypes.STRING,
  },
});

const Contact = db.define("Contact", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },

  phone: {
    type: DataTypes.INTEGER,
  },
});

User.hasOne(Contact, {
  foreignKey: DataTypes.UUID,
  allowNull: false
});
Contact.belongsTo(User);

db.sync({alter: true});
module.exports = { User, Contact };
