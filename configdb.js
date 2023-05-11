import { Sequelize, Model, DataTypes } from 'sequelize';

        // const sequelize = new Sequelize('testdb_cul2', 'sontaya', 'edOrR8vOo1Hnq6qi068rp8Gl398zbNLe', {
        //     host: 'dpg-chbnv8e7avjcvo70hjpg-a',
        //     port:5432,
        //     dialect:  'postgres'
        //   });
          
        const sequelize = new Sequelize('testdb', 'root', '', {
          host: 'localhost',
          dialect:  'mysql'
        });
        
        export default sequelize