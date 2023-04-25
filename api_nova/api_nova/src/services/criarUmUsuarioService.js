import { criarUmUsuarioRepository } from '../repositories/criarUmUsuarioRepository.js'
import { buscarUmUsuarioPeloLoginRepository } from '../repositories/buscarUmUsuarioPeloLoginRepository.js'

export const criarUmUsuarioService = async ({ login, email, senha, nivel }) => {

   if (!login || !email || !senha || !nivel) {
      throw new Error('Favor informar o login, email, senha e nivel');
   }

   const usuarioExiste = await buscarUmUsuarioPeloLoginRepository(login);

   if (usuarioExiste) {
      throw new Error('Usuário já existe no sistema');
   }

   const usuarioCriado = await criarUmUsuarioRepository({ login, email, senha, nivel });

   return usuarioCriado
}