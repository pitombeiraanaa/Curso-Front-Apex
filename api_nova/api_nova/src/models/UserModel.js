import { database } from '../database/config.js';
import { DataTypes } from 'sequelize';

const { STRING, INTEGER } = DataTypes;

export const UserModel = database.define(
   'tb_users',
   {
      id: {
         type: INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      login: {
         type: STRING,
         allowNull: false,
         unique: true,
      },
      email: {
         type: STRING,
         allowNull: false,
      },
      senha: {
         type: STRING,
         allowNull: false,
      },
      nivel: {
         type: STRING,
         allowNull: false,
      },
   },
   { timestamps: false }
);
