import { buscarUsuariosService } from '../services/buscarUsuariosService.js';

export const buscarTodosUsuariosController = async (req, res) => {
   try {
      const usuarios = await buscarUsuariosService();

      return res.status(200).json({
         message: 'Usuários encontrados com sucesso!',
         status: 'Sucesso',
         usuarios: usuarios,
      });
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         status: 'Erro',
      });
   }
};
