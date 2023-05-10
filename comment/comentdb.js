import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './../configdb.js'

let Comment
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    Comment = sequelize.define('comment', {
        // Model attributes are defined here
        // id: {
        //   type: DataTypes.STRING,
        //   allowNull: false
        // },
        Commentid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        commnetMessage: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
    (async () => {
        await sequelize.sync({ force: true });
        // Code here
    })();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}



export default Comment
