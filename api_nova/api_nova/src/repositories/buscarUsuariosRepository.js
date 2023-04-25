import { UserModel as model } from '../models/UserModel.js';

export const buscarUsuariosRepository = async () => {
   return await model.findAll();
};
