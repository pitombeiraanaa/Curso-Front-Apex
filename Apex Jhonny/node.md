## O que é NodeJS?

-  O Node.js é uma linguagem de programação baseada em JavaScript. Muitos projetos adotam essa linguagem devido a facilidade em desenvolver funcionalidades, além de ser gratuita, leve e muito fácil de aprender.

-  Mesmo tendo como base a linguagem JavaScript, o Node.js `não precisa` de um navegador para funcionar.

-  Se você já desenvolveu em JavaScript sabe que seu funcionamento
   ocorre totalmente via browser, porém o Node.js extraiu as funcionalidades para que seja possível executar sem o uso do navegador, sendo assim você pode criar seus sistemas utilizando plataformas desktop, web e mobile.

---

## Historia do Node.js

-  O Node.js foi criado em `2009` pelo desenvolvedor `Ryan Dahl`

-  A linguagem se baseia pelo interpretador de código V8 do Google Chrome, que interpreta a linguagem JavaScript. O código do V8 é totalmente aberto, sendo assim os desenvolvedores podem criar diversas implementações de maneira totalmente gratuita.

---

## Características do Node.js

-  Velocidade no processamento
-  Facilidade em compreender sua estrutura
-  Linguagem gratuita
-  Vasta gama de frameworks
-  Comunidade ativa
-  Utilizar o padrão do JavaScript, que faz com que haja um número razoavelmente grande de desenvolvedores aptos a desenvolver na linguagem.

`Uma característica muito forte que devemos citar sobre o Node.js é o seu funcionamento através de threads. Vamos supor que você tenha um loop contínuo, em seguida uma condicional, o que acontece é que a linguagem vai precisar de uma thread para cada uma das funcionalidades, isso faz com que haja lentidão caso o hardware não consiga suprir a demanda de usuários utilizando o sistema.`

`O Node.js tem o padrão de single-thread, sendo assim ele não cria várias threads na sua execução. Isso é bom, pois garante um fluxo rápido de processamento, porém em aplicações mais complexas o uso de apenas um thread pode significar uma má escolha de linguagem.`

---

## O que é NPM?

-  `NPM` é um `gerenciador de pacotes` do NodeJS que é utilizado para instalar pacotes no seu sistema.

---

## Demonstração execução código js com nodejs

-  Crie uma pasta chamada `nodejs` e dentro dela crie um arquivo chamado `index.js` com o seguinte código: `console.log('Estudando NodeJS na Apex Ensinos');` depois execute o arquivo com o comando: `node index.js` e veja o resultado no console.

---

## Módulos no NodeJS

No Node.js existe um padrão muito forte chamado modularização, ou simplesmente módulos. Os módulos têm a finalidade de separar sua aplicação, facilitando na organização do
código e reutilização do mesmo.

Para compreender este padrão, vamos criar um módulo e importar eles em um arquivo externo e rodar o arquivo principal.

```js
function Somar(n1, n2) {
   return n1 + n2;
}

module.exports = Somar;
```

```js
const somar = require('./somar');

console.log(somar(1, 2));
```

### Versão nova

-  O NodeJS por padrão não suporta as novas tecnologias do javascript de importação e exportação ES6, porém de forma muito simples podemos fazer ele aceitar essas configurações basta ir no arquivo `package.json` e adicionar uma opção chamada `"type": "module"`

```js
function somar(n1, n2) {
   return n1 + n2;
}

export default somar;
```

## ou

```js
function somar(n1, n2) {
   return n1 + n2;
}

export { somar };
```

## ou

```js
export function somar(n1, n2) {
   return n1 + n2;
}
```

-  Para importar podemos utilizar esta sintaxe

```js
import somar from './somar';

somar(1, 2);
```

---

## Criando um servidor NodeJS

```js
import http from 'http';

http
   .createServer(function (req, res) {
      res.end('Node.js na Apex Ensinos');
   })
   .listen(3000);
```

---

## Framework Express

O Express é um dos frameworks mais utilizados no Node.js, pois ele dispõe uma série de funcionalidades para facilitar o desenvolvimento de APIs e manter o bom desempenho de suas aplicações.

Há muitas empresas que utilizam o Node.js em seus sistemas como por exemplo: `Fox Sports, IBM, Uber, PayPal, eBay`, entre outras gigantes do mercado.

---

## Instalando Express

-  Iniciar aplicação node `npm init -y`

-  Vamos utilizar o NPM para baixar nosso Express.

-  Dentro da pasta rode o comando no terminal `npm install express`

-  node_modules é uma pasta para armazenar os módulos instalados pelo NPM. `(Não mexer)`

-  Package-lock.json é um arquivo que é utilizado pelo NPM para garantir que todos os módulos instalados estão atualizados. `(Não mexer)`

-  Package.json é um arquivo que é utilizado pelo NPM para definir as dependências e configurações do projeto.

---

## Criando aplicação com Express

```js
import express from 'express';
const server = express();

server.listen(3000, () => console.log('Servidor rodando'));
```

## Rotas

As rotas são utilizadas para exibir determinados conteúdos de uma página web, quem já desenvolveu em HTML utilizou o comando `<a href=””></a>`, isso é um link, e o conceito de rota é exatamente o mesmo.

```js
import express from 'express';
const server = express();

server.get('/', function(req, res){
   res.send('<h1>Node.js na Apex Ensinos</h1>');
}

server.get('/sobre', function(req, res){
   res.send('Página sobre');
}

server.get('/contato', function(req, res){
   res.send('Página sobre');
}

server.listen(3000, () => console.log("Servidor rodando"));
```

---

## Rotas com parâmetros

Em alguns momentos será necessário manipular parâmetros em suas rotasfuncionalidades como por exemplo: alterações, exclusões e filtragens, são utilizadas rotas para especificarmos determinadas ações.

No Node.js é muito simples trabalhar com parâmetros, basta seguirmos a seguinte estrutura: `/rota/:parametro1/:parametro2`, os parâmetros são separados pela barra e seguidos de dois pontos.

```js
server.get('/apresentacao/:nome', function(req, res){
   res.send('Olá ' + req.params.nome);
}
```

## Nodemon

O Nodemon é um complemento muito utilizado no Node.js, você reparou que até aqui toda a alteração de código é necessário finalizar o servidor e iniciá-lo novamente? Isso pode ser um pouco chato quando você está realizando testes em algum sistema, então para facilitar e não precisar parar e iniciar toda a vez que for alterar alguma coisa temos o Nodemon.

`npm install -g nodemon`

---

## Trabalhando com HTML no Nodejs

Crie uma pasta chamada `paginas` e dentro dela crie um arquivo chamado `inicio.html`

Para renderizar este arquivo no NodeJS, vamos utilizar a seguinta forma

```js
server.get('/apresentacao/:nome', function(req, res){
   res.sendFile(__dirname + '/paginas/inicio.html');
}
```

---

## Adicionar CSS E JS as suas paginas HTML

Por padrão o NodeJS não entende o código CSS e JS (do front-end) para isso vamos ter que adicionar ao nosso servidor uma pasta estatica chamada `public` e dentro dela iremos colocar todo nosso css e js. Assim o node sabera que sempre que a gente importar alguma coisa de css ou js será a partir daquela pasta

```js
server.use(express.static(__dirname + '/public'));
```

---

## Rotas externas

Até agora colocamos nossas rotas dentro do arquivo do servidor, mas você concorda comigo que a partir do momento que tivermos varias rotas o arquivo iria ficar grande e complicado de entender? Então para resolver isso iremos criar um arquivo especifico para rotas e importa-lo no nosso servidor e falar para o express utilizar as rotas que definimos

```js
import { Router } from 'express';
const routes = Router();

// CRIAR SUAS ROTAS AQUI NO MEIO
routes.get('/', (request, response) => {
   //....
});

routes.get('/usuarios', (request, response) => {
   //....
});

export { routes };
```

Dentro do arquivo do servidor precisamos importar as rotas e falar para o servidor utilizar elas

```js
import { routes } from './routes';

server.use(routes);
```

---

# EXERCICIO

Criar uma aplicação node do 0. instalar o nodemon e o express configurar o servidor e criar 3 rotas.

1 - A pagina `login` devera conter um pequeno formulario de login e senha para se logar na sua loja.

2 - A pagina `home` que deverá conter um título da sua loja virtual

-  Em seguida criar uma lista com 5 cards de produtos e sua descrição

3 - A pagina `sobre` que deverá conter um título e um parágrafo sobre a sua loja virtual

4 - A pagina `contato` que deverá conter um título e um formulário de contato para sua loja.

---

### Controllers

Controllers vem da palavra controlador, ele serve para fazer uma organização do código, ou seja, ele é um arquivo que contém as funções que serão utilizadas para fazer a lógica do nosso sistema (ROTAS). ele é criado em um arquivo externo e é importado e colocado no lugar da função que iria receber o request e o response.

---

## Banco de dados

Nessa etapa do projeto vamos manipular o banco de dados, há diversos tipos de banco de dados no mercado, os mais conhecidos são: `MySQL, PostgreSQL, Oracle, SQL Server e MongoDB`

Cada banco de dados possui suas características, porém a função deles é a mesma, armazenar dados por um período indeterminado. Para essa etapa vamos utilizar o `MySQL`, devido a sua grande utilização no mercado, porém posteriormente você pode criar suas aplicações utilizando outros bancos de dados.

-  Instalação do MySql
-  Instalação do MySqlWorkbench

---

### Comandos Basicos de banco de dados

-  `create database nome_do_banco` Serve para criar um banco de dados(como se fosse uma pasta)
   <br>

-  `create table nome_da_tabela (propriedades)` Serve para criar uma tabela(como se fosse um arquivo)
   <br>

-  `insert into nome_da_tabela (propriedades) values (valores)` Serve para inserir dados na tabela
   <br>

-  `select * from nome_da_tabela` Serve para selecionar todos os dados da tabela
   <br>

-  `update nome_da_tabela set propriedades = valores` Serve para atualizar dados na tabela
   <br>

-  `delete from nome_da_tabela` Serve para deletar dados na tabela
   <br>

-  `drop database nome_do_banco` Serve para deletar um banco de dados.

---

## HandleBars

A utilização de Handlebars é muito comum em projetos Node.js, podemos implementar a visualização de variáveis e executar ações como condicionais e laços de repetição na própria página HTML.

Em uma página HTML estática não é possível acessarmos com facilidade funções, arrays e demais características de um arquivo .js, sendo assim o Handlebars irá facilitar a manipulação dessas informações.

Depois iremos implementar o uso do Handlebars, o importante neste momento é você compreender o conceito desse complemento.

---

## Sequelize

O Sequelize é um pacote do Node.js específico para realizar conexão com diversos bancos de dados, entre eles o MySQL.

A arquitetura do Sequelize é o `ORM (Object-relational mapping)`, fazendo com que a criação das tabelas seja feita pelo próprio Sequelize através de um modelo, também podemos executar comandos SQL como por exemplo: `Insert, Update, Select e Delete` com funcionalidades próprias do Sequelize, claro que vale lembrar que uma noção básica de banco
de dados é interessante, assim facilita a compreensão do uso do Sequelize.

`npm install sequelize`

---

## Body-parser

O Body-parser é um complemento que tem como finalidade obter dados enviados a partir de um formulário. Porém ele pode facilmente ser substituido pela opção `server.use(express.json())`

`npm install body-parser`

---

## Projeto Node.js com express, HandleBars, Sequelize e Body-parser

Neste capítulo iremos aprender a criar um CRUD em Node.js e MySQL, e você deve estar se perguntando o que é `CRUD`, correto? CRUD vêm das palavras `CREATE`, `READ`, `UPDATE` e `DELETE`, que são as funções básicas que um banco de dados faz, no caso: inserir, selecionar,
alterar e excluir.

Passos

-  Criar nosso banco de dados com o nome `crud`

-  Instalar as dependencias
   -  express `npm install express`
   -  sequelize `npm install sequelize`
   -  Suporte ao sql mysql2 `npm install mysql2`
   -  handlebars `npm install express-handlebars`
   -  body-parser `npm install body-parser`

```js
// Conexão com o banco de dados
import Sequelize from 'sequelize';
const sequelize = new Sequelize('crud', 'root', 'root', {
   host: 'localhost',
   dialect: 'mysql',
});

module.exports = {
   Sequelize,
   sequelize,
};
```

```js
//Criar a tabela do banco de dados
import db from './db';

const Post = db.sequelize.define('postagens', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
   titulo: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   conteudo: {
      type: Sequelize.TEXT,
      allowNull: false,
   },
});

export { Post };

// Somente uma vez
Post.sync({ force: true });
```

```text
Configurar o handlebars

Criar uma estrutura de pasta exatamente igual a esta

views >
   layouts >
      main.handlebars
```

```handlebars
<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   {{{body}}} <==== Onde vai o conteúdo da página
</body>
</html>
```

Criar um arquivo formulario.handlebars

```html
<form action="/add" method="POST">
   <input type="text" name="titulo" />
   <textarea name="conteudo"></textarea>
   <input type="submit" value="Enviar" />
</form>
```

```handlebars
<h1>Lista de Postagens:</h1>

{{#each posts}}
   <h1>{{dataValues.titulo}}</h1>
   <p>{{dataValues.conteudo}}</p>
   <a href='/deletar/{{dataValues.id}}'><button>Deletar</button></a>
   <hr />
{{/each}}
```

```js
const express = require('express');
const handle = require('express-handlebars');
const bodyParser = require('body-parser');

//instanciação
const app = express();

//Template
app.engine('handlebars', handle.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//liberar acesso a arquivos externos/estaticos
app.use(express.static(__dirname + '/public'));

// ROTAS A SEREM FEITAS

app.listen(8081, () => console.log('Servidor rodando http://localhost:8081'));
```

```js
import { Router } from 'express';
import Post from './CAMINHO DO ARQUIVO';
const route = Router();

route.get('/cad', (req, res) => {
   res.render('formulario');
});

route.get('/', async (req, res) => {
   const posts = await Post.findAll();
   res.render('home', { posts });
});

route.post('/add', async (req, res) => {
   const titulo = req.body.titulo;
   const conteudo = req.body.conteudo;

   await Post.create({ titulo, conteudo });

   res.redirect('/');
});

route.delete('/deletar/:id', async (req, res) => {
   const id = req.params.id;

   await Post.destroy({
      where: {
         id: id,
      },
   });

   res.redirect('/');
});
```
