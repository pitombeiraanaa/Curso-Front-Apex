import { UserModel as model } from '../models/UserModel.js';
import bcrypt from 'bcrypt'

export const criarUmUsuarioRepository = async ({
   login,
   email,
   senha,
   nivel,
}) => {

   const senhaCriptografada = await bcrypt.hash(senha, 10)

   const usuarioCriado = await model.create({
      login: login.toLowerCase(),
      senha: senhaCriptografada,
      email: email.toLowerCase(),
      nivel: nivel.toLowerCase(),
   })

   return usuarioCriado;
};
