import { Sequelize, Model, DataTypes } from 'sequelize';

import sequelize from './../configdb.js'
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
                PostUser:{
                  type: DataTypes.STRING
                },
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
          
     

  export  {post,sequelize}
