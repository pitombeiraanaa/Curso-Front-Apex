import { buscarUsuariosRepository } from '../repositories/buscarUsuariosRepository.js';

export const buscarUsuariosService = async () => {
   const usuarios = await buscarUsuariosRepository();

   if (usuarios.length == 0) {
      throw new Error('Nenhum usuário encontrado');
   }

   return usuarios;
};
