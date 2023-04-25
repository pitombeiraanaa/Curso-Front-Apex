import { atualizarUsuarioService } from '../services/atualizarUsuarioService.js';

export const atualizarUsuarioController = async (req, res) => {
   try {
      let { id } = req.params;
      let { login, email, senha, nivel } = req.body;

      const usuarioAtualizado = await atualizarUsuarioService({
         idUrl: id,
         novoLogin: login,
         novoEmail: email,
         novaSenha: senha,
         novoNivel: nivel,
      });

      return res.status(200).json({
         message: 'Usuário atualizado com sucesso!',
         status: 'Sucesso',
         usuarioAtualizado: usuarioAtualizado,
      });
   } catch (error) {
      return res.status(500).json({
         message: error.message,
         status: 'Erro',
      });
   }
};
