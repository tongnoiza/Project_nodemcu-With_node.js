import { Sequelize, Model, DataTypes } from 'sequelize';

        const sequelize = new Sequelize('testdb', 'root', '', {
            host: 'localhost',
            dialect:  'mysql'
          });
              let post
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            post = sequelize.define('Post', {
                // Model attributes are defined here
                // id: {
                //   type: DataTypes.STRING,
                //   allowNull: false
                // },
                
                PostHeader: {
                  type: DataTypes.STRING
                  // allowNull defaults to true
                },
                PostMessage: {
                  type: DataTypes.STRING
                  // allowNull defaults to true
                },
               
              });
              (async () => {
                // await sequelize.sync({ force: true });
                // Code here
              })();
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
          
     

  export default post
