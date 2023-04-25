import { Router } from 'express';
export const routes = Router();

import { atualizarUsuarioController } from './controllers/atualizarUsuarioController.js';
import { buscarTodosUsuariosController } from './controllers/buscarTodosUsuariosController.js';
import { buscarUmUsuarioController } from './controllers/buscarUmUsuarioController.js';
import { criarUmUsuarioController } from './controllers/criarUmUsuarioController.js';
import { excluirUmUsuarioController } from './controllers/excluirUmUsuarioController.js';
import { verificarLoginController } from './controllers/verificarLoginController.js';

routes.get('/users', buscarTodosUsuariosController);
routes.get('/users/:id', buscarUmUsuarioController);
routes.post('/users', criarUmUsuarioController);
routes.delete('/users/:id', excluirUmUsuarioController);
routes.put('/users/:id', atualizarUsuarioController);
routes.post('/verificarlogin', verificarLoginController);
