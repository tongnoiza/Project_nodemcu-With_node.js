import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './../configdb.js'

          let Motorlogging
        try {
            await sequelize.authenticate();
            console.log('Connection MotorLog');
                Motorlogging = sequelize.define('MotorLog', {
                // Model attributes are defined here
                status: {
                  type: DataTypes.STRING,
                  allowNull: false
                },
                motor_no: {
                  type: DataTypes.STRING
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

  export default Motorlogging
