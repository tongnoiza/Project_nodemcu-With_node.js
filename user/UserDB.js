import { Sequelize, Model, DataTypes } from 'sequelize';

        const sequelize = new Sequelize('testdb_cul2', 'sontaya', 'edOrR8vOo1Hnq6qi068rp8Gl398zbNLe', {
          host: 'dpg-chbnv8e7avjcvo70hjpg-a',
          port:5432,
            dialect:  'postgres'
          });
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
                // await sequelize.sync({ force: true });
                // Code here
              })();
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }

  export default Userdb
