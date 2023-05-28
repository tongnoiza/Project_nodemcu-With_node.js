import { Sequelize, Model, DataTypes } from 'sequelize';

        // const sequelize = new Sequelize('testdb_cul2', 'sontaya', 'edOrR8vOo1Hnq6qi068rp8Gl398zbNLe', {
        //     host: 'dpg-chbnv8e7avjcvo70hjpg-a',
        //     port:5432,
        //     dialect:  'postgres'
        //   });
          
          // const sequelize = new Sequelize('verceldb', 'default', '4GRWrjXS2chT', {
          //   host: 'ep-lingering-pine-802136-pooler.ap-southeast-1.postgres.vercel-storage.com',
          //   port:5432,
          //   dialect:  'postgres'
          // });
        const sequelize = new Sequelize('testdb', 'root', '', {
          host: 'localhost',
          dialect:  'mysql'
        });
        
        export default sequelize