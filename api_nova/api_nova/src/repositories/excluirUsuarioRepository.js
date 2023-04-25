import { UserModel as model } from '../models/UserModel.js'

export const excluirUsuarioRepository = async (idUsuario) => {
   await model.destroy({
      where: {
         id: idUsuario
      }
   });
}

