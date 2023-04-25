import { buscarUmUsuarioRepository } from '../repositories/buscarUmUsuarioRepository.js';

export const buscarUmUsuarioService = async (idUsuario) => {
   const usuario = await buscarUmUsuarioRepository(idUsuario);

   if (!usuario) {
      throw new Error('Usuário não encontrado');
   }

   return usuario;
};
