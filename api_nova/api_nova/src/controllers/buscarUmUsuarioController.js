import { buscarUmUsuarioService } from '../services/buscarUmUsuarioService.js';

export const buscarUmUsuarioController = async (req, res) => {
   const { id } = req.params;

   try {
      const usuario = await buscarUmUsuarioService(id);
      return res.status(200).json({
         message: 'Usuário encontrado com sucesso',
         status: 'Sucesso',
         usuario: usuario,
      });
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         status: 'Erro',
      });
   }
};
