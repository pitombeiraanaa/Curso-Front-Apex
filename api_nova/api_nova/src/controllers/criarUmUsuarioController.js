import { criarUmUsuarioService } from "../services/criarUmUsuarioService.js"

export const criarUmUsuarioController = async (req, res) => {
   try {
      let { login, email, senha, nivel } = req.body;

      const usuarioCriado = await criarUmUsuarioService({ login, email, senha, nivel });

      return res.status(201).json({
         message: 'Usuário criado com sucesso!',
         status: 'Sucesso',
         usuario: usuarioCriado,
      });

   } catch (error) {
      return res.status(400).json({
         message: error.message,
         status: 'Erro',
      });
   }
}