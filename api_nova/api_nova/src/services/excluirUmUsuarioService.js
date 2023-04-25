import { excluirUsuarioRepository } from "../repositories/excluirUsuarioRepository.js";

export const excluirUmUsuarioService = async (idUsuario) => {
   await excluirUsuarioRepository(idUsuario);
}