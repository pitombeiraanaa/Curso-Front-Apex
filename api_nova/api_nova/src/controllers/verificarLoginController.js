import { verificarLoginService } from '../services/verificarLoginService.js';

export const verificarLoginController = async (req, res) => {
   try {
      let { login, senha } = req.body;

      const loginUsuario = await verificarLoginService({ login, senha });

      return res.status(200).json({
         message: 'Usuário autenticado com sucesso!',
         status: 'Sucesso',
         login: loginUsuario,
      });
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         status: 'Erro',
      });
   }
};
