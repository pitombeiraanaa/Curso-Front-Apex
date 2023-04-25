/*
!!!!!!!!!!!!!! EXEMPLOS AULA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
GET => obter dados, listar algo, buscar algo...
POST => criar algo que não existe
PUT => atualizar algo que já existe
DELETE => apagar

OUTROS

*/

// import * as url from 'url'
// const __filename = url.fileURLToPath(import.meta.url)
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// import express from 'express'
// import { useCallback } from 'react/cjs/react.production.min'
// const app = express()
// useCallback.app(express.static(__dirname + '/public'))

// let usuarios = ['Johny', 'Maria', 'João']

// app.get('/', (req, res) => {
//   return res.json({ usuarios, count: usuarios.length })
// })

// app.get('/usuario/:nome', (req, res) => {
//   const nome = req.params.nome

//   const queryParams = req.query.name
//   if (queryParams == null || queryParams == '') {
//     return res.status(400).json({ error: 'Nome não informado!' })
//   }

//   return res.json({ nome, queryParams })

//   app.get('/html', (req, res) => {
//     res.sendFile(__dirname + '/paginas/inicio.html')
//   })
// params => parâmetros que vem na rota
// query => parâmetros adicionais a rota
// body => parâmetros no corpo da requisição
// })

// app.post('/', (req, res) => {
//   usuarios.push('João')
//   return res.status(204).send('Usuario adicionado com sucesso!')
// })

// app.get('/usuario', (req,res)=> {});

// app.listen(3333, () => {
//   console.log('Server started on port 3333!')
// })

// EXERCICIO ROTAS - PAGINA / PUBLIC

import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

import express from 'express'

const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/html', (req, res) => {
  res.sendFile(__dirname + '/paginas/inicio.html')
})

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})
