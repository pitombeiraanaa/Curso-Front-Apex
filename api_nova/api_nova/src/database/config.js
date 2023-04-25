import Sequelize from 'sequelize';

export const database = new Sequelize('banco', 'login', 'senha', {
   dialect: 'sqlite',
   host: './src/database/db.sqlite',
   logging: false,
});
