import Sequelize from "sequelize";

export const db = new Sequelize('test1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
