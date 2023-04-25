import { atualizarUsuarioRepository } from '../repositories/atualizarUsuarioRepository.js';
import { buscarUmUsuarioPeloLoginRepository } from '../repositories/buscarUmUsuarioPeloLoginRepository.js';

export const atualizarUsuarioService = async ({
   idUrl,
   novoLogin,
   novoEmail,
   novaSenha,
   novoNivel,
}) => {
   if (!novoLogin || !novoEmail || !novaSenha || !novoNivel) {
      throw new Error(
         'Todos os campos devem ser preenchidos login, email, senha e nivel'
      );
   }

   const existeUsuario = await buscarUmUsuarioPeloLoginRepository(novoLogin);

   if (existeUsuario && existeUsuario.id != idUrl) {
      throw new Error('Login já cadastrado');
   }

   const usuarioAtualizado = await atualizarUsuarioRepository({
      idUrl,
      novoLogin,
      novoEmail,
      novaSenha,
      novoNivel,
   });

   return usuarioAtualizado;
};
