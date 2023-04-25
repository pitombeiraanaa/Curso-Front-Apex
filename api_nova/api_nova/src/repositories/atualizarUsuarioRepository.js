import { UserModel as model } from '../models/UserModel.js';
import bcrypt from 'bcrypt';

export const atualizarUsuarioRepository = async ({
   idUrl,
   novoLogin,
   novoEmail,
   novaSenha,
   novoNivel,
}) => {
   const dados = {
      id: idUrl,
      login: novoLogin.toLowerCase(),
      email: novoEmail.toLowerCase(),
      senha: await bcrypt.hash(novaSenha, 10),
      nivel: novoNivel.toLowerCase(),
   };

   await model.update(dados, {
      where: {
         id: dados.id,
      },
   });
   return dados;
};
