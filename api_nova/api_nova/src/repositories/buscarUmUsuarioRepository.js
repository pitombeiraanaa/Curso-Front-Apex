import { UserModel as model } from '../models/UserModel.js';

export const buscarUmUsuarioRepository = async (idUsuario) => {
   const usuario = await model.findByPk(idUsuario);
   return usuario;
};
