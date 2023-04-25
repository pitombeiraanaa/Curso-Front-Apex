import { UserModel as model } from '../models/UserModel.js';

export const buscarUmUsuarioPeloLoginRepository = async (loginUsuario) => {
   const usuario = await model.findOne({
      where: {
         login: loginUsuario.toLowerCase()
      }
   })

   return usuario;
};
