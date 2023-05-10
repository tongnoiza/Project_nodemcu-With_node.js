import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './../configdb.js'
     
          let Userdb
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
                Userdb = sequelize.define('Posts', {
                // Model attributes are defined here
                status: {
                  type: DataTypes.STRING,
                  allowNull: false
                },
                motor_no: {
                  type: DataTypes.INTEGER
                  // allowNull defaults to true
                }
              });
              (async () => {
                await sequelize.sync({ force: true });
                // Code here
              })();
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }

  export default Userdb
