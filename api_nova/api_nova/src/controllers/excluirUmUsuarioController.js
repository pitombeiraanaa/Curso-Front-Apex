import { excluirUmUsuarioService } from '../services/excluirUmUsuarioService.js';

export const excluirUmUsuarioController = async (req, res) => {
   const idUsuario = req.params.id;

   try {
      await excluirUmUsuarioService(idUsuario);
      return res.status(200).send({
         message: 'Usuário excluído com sucesso',
         status: 'Sucesso',
      });
   } catch (error) {
      return res.status(500).send({
         message: 'Erro ao excluir usuário',
      });
   }
};
