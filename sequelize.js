import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('testdb', 'root', '', {
    host: 'localhost',
    dialect:  'mysql'
  });
  export default sequelize