import { buscarUmUsuarioPeloLoginRepository } from '../repositories/buscarUmUsuarioPeloLoginRepository.js';
import bcrypt from 'bcrypt';

export const verificarLoginService = async ({ login, senha }) => {
   if (!login || !senha) {
      throw new Error('Login e senha são obrigatórios');
   }

   const usuarioBanco = await buscarUmUsuarioPeloLoginRepository(login);

   if (!usuarioBanco) {
      throw new Error('Usuário não encontrado');
   }

   const senhaValida = await bcrypt.compare(senha, usuarioBanco.senha);

   if (!senhaValida) {
      throw new Error('Login ou senha inválidos');
   }

   return usuarioBanco.login;
};
