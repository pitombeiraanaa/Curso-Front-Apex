### Design Responsivo
```text
Design responsivo é uma técnica para que as páginas web 
consigam se adaptar independente da resolução de
tela e do dispositivo móvel. Tem como base utilizar o CSS e o JavaScript.

As principais técnicas para trabalhar com o design responsivo são compostas por:

● Media Queries
● Grid Layout
● Flexbox
```

### Conceito Mobile First
```text
Mobile First é uma técnica com o foco em dispositivos móveis.

Iniciando o desenvolvimento do site para celular e adaptar para desktop.
```

### Unidades de Medida
```text
Até agora estavamos utilizando o PX ou % para nossas medidas correto?

Quando utilizamos essas unidades pode haver problemas em determinadas resoluções como quebra indevida
de elementos, pixelização em imagens ou fontes de tamanhos desproporcionais, sendo assim é interessante
haver uma unidade que possa ajudar nessa padronização.
```

#### Unidade EM
```css
/*É uma medida que leva em concideração o alvo / contexto

Por exemplo:

Por padrão o navegador nos traz um tamanho de fonte de 16px

COM PX:*/
h1{
   font-size: 20px;
}

/*com EM     seria 20 /16      */
h1{
   font-size:  1.25em;
}

```

### Unidade de medida REM
```css
/* Além do EM existe o padrão REM, onde o R vem da palavra root que significa padrão, imagine que você queira
usar como padrão o body da página. Se você deixar o body em 100% e usar um h1 com 1.25rem, você está
dizendo que quando a página está utilizando a fonte 16px que equivale a 100%, 20px equivalem a 1.25 rem.
Confuso? O Rem tem como base usar o body como base, sendo assim se diminuirmos os 100% do body para
80%, quer dizer que nosso h1 será diminuído, isso também funciona se você quiser aumentar o body de 100%
para 120%. */

body{
   font-size: 100%; /*Padrão do navegador é fonte 16px para calculo*/
}

h1{
   font-size: 1.25rem;
}
/* 
   Terá 125% do tamanho da fonte
   se 16px é 100%
   quanto que é 125% fazendo uma regra de 3
   sabemos que 20px
*/
```

### ViewWidth e ViewHeight
```css

/* ViewWidth é um calculo do tamanho da largura da tela do usuario então*/

body{
   width: 100vw; /*Terá 100% do tamanho da tela do usuario*/
}

body{
   width: 50vw; /*Terá metade da tela do usuário*/
}
```


### Grid
```text
A técnica Grid View é muito utilizada em sites responsivos, sua finalidade é prover blocos para encaixar os
elementos das páginas HTML como textos, imagens, vídeos, formulários, entre outros.

Frameworks como o Bootstrap utilizam o Grid View para facilitar o desenvolvimento das páginas web, além de
ser um padrão que pode ser desenvolvido do zero sem qualquer framework.

Um Grid é composto por 12 colunas.
```

```css
.col-1{
   width: 8.33%;
}
.col-2{
   width: 16.66%;
}
.col-3{
   width: 25%;
}
.col-4{
   width: 33.33%;
}
.col-5{
   width: 41.66%;
}
.col-6{
   width: 50%;
}
.col-7{
   width: 58.33%;
}
.col-8{
   width: 66.66%;
}
.col-9{
   width: 75%;
}
.col-10{
   width: 83.33%;
}
.col-11{
   width: 91.66%;
}
.col-12{
   width: 100%;
}

/* Chamando as colunas via class */
[class*="col-"]{
   float: left;
   padding: 15px;
   border: 1px solid red;
}
```


### Media Queries
```css
/* O uso de Media Queries em sites responsivos é indispensável, se você já trabalhou com alguma linguagem de
programação deve conhecer a estrutura condicional IF */

@media screen and (max-width: 500px){
   body{
      background-color: red;
   }
}

@media screen and (min-width: 501px) and (max-width: 900px){
   body{
      background-color: green;
   }
}

@media screen and (min-width: 901px) and (max-width: 1200px){
   body{
      background-color: green;
   }
}

@media screen and (min-width: 1201){
   body{
      background-color: yellow;
   }
}
```

```html
Talvez você ache que um CSS com vários @media seja algo que
vai dar um trabalho muito grande de manutenção, 
pois há várias resoluções em um só arquivo CSS, realmente caso você esteja trabalhando com uma
loja virtual, portal ou algo parecido realmente será um trabalho bem grande deixar organizado, mas você pode
separar em arquivos CSS e especificar a Media Queries na chamada do arquivo.

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>

   <link rel="stylesheet" href="ARQUIVO1.css" media="screen and (max-width: 500px)">
   <link rel="stylesheet" href="ARQUIVO2.css" media="screen and (min-width: 501px) and (max-width: 900px)">
   <link rel="stylesheet" href="ARQUIVO3.css" media="screen and (min-width: 901px) and (max-width: 1200px)">
   <link rel="stylesheet" href="ARQUIVO4.css" media="screen and (min-width: 1201)">

</head>

```

### Imagens e Videos Responsivos

```html
<body>
   <picture>
      <source media="(max-width: 500px)" srcset="pequena.jpg">
      <source media="(min-width: 501px)" srcset="grande.jpg">
      <img src="">
   </picture>
</body>

Lembrando que para funcionar o <source-srcset="">, é necessário estar englobado entre as tags
<picture></picture>
```

### Bootstrap

```html
O Bootstrap é um framework desenvolvido e mantido pelo Twitter, sua principal finalidade é disponibilizar aos
desenvolvedores uma ferramenta capaz de criar sites responsivos de maneira rápida, fácil e com uma
documentação bem explícita.


https://getbootstrap.com/
```