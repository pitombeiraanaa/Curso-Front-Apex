import express from 'express';
import cors from 'cors';
import { routes } from './routes.js';
import { database } from './database/config.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(3333, () => {
   database.sync().then(() => console.log('Banco conectado com sucesso!'));
   console.log('Servidor está rodando http://localhost:3333/api');
});
