### Typescript

```text
TypeScript é conhecido por ser um superconjunto de JavaScript,
desenvolvido e mantido pela Microsoft.

A linguagem conta com todas as funcionalidades do JavaScript, além da utilização de orientação a
objetos, que podemos trabalhar em linguagens como o C#, Java, PHP, entre outras, além disso conseguimos
definir tipos de dados nas variáveis e definir os tipos de retornos em funções.
```

### Orientação a objetos

```text
Talvez você já leu ou ouviu falar desse conceito, a orientação a objetos é uma maneira de abstrairmos
nossa lógica, deixando mais parecida com o mundo real. Imagine que há um sistema, onde seja possível
cadastrar produtos, o que os produtos possuem de características em comum?

Nome, marca, valor, descrição, quantidade em estoque, entre outras características. A ideia de utilizar
orientação a objetos em suas aplicações é fantástica, pois facilita a compreensão da estrutura, além seguir um
padrão muito utilizado pelas linguagens de desenvolvimento.
```

### Configurando Ambiente

```text
npm install -g typescript

A extensão dos arquivos typescript é .ts e não .js

Para iniciar a configuração do typescript após instalado na pasta do projeto

tsc --init

```

### Compilando arquivos TypeScript

```text

Utilizar comando tsc junto ao nome do arquivo

Exemplo: tsc MeuArquivo.ts

o compilador irá criar um arquivo MeuArquivo.js

```

### Classe

```text
Mas o que é uma classe?
Vamos fazer o seguinte, pense em um carro, qualquer carro. A pergunta a ser feita é, todos os carros
são iguais? A resposta é não! Mesmo os carros possuindo características em comum como cor, ano, modelo,
entre outros, são todos diferentes.
```

```ts
class Pai{
   public Nome:String = "Johnny";
   public Idade:Number = 20;
   public Peso:Number = 65.77;
   public Programador:Boolean = true;
   public NomeFilhos:<Filhos>[] = [];
   public Carro:Object = {}
}

private class Filhos{
   public Nome:string;
   public Idade:number;
}
```

### Atributos

```ts
class Carro {
   // Atributos
   fabricante: string;
   modelo: string;
   cor: string;
   ano: number;
   PossuiTetoSolar: boolean;
}
```

### Métodos /Funções

```ts

exibirDados():void {
   let mensagem = "Os dados do veículo são:";
   mensagem += "\nFabricante: " + this.fabricante;
   mensagem += "\nModelo: " + this.modelo;
   mensagem += "\nCor: " + this.cor;
   mensagem += "\nAno: " + this.ano;
   mensagem += "\nTeto Solar: " + this.tetoSolar;
   alert(mensagem);
}
```

### Objeto

```html
<script>
   carro = new Carro();
   carro.fabricante = 'Hyundai';
   carro.modelo = 'HB20';
   carro.cor = 'Azul';
   carro.ano = 2019;
   carro.PossuiTetoSolar = true;
   carro.exibirDados();
</script>
```

### Construtor

```text
O Construtor é um método executado automaticamente ao instanciar um objeto.
```

```ts
constructor(){
   alert("Construtor Executado")
}
```

### Encapsulamento

```text
O encapsulamento é uma técnica para deixar visíveis ou ocultos atributos e métodos disponíveis nas
classes, há quatro tipos de encapsulamento:

● Default: Quando não define o tipo de encapsulamento.
● Public: Qualquer um pode acessar os atributos e métodos daquela classe.
● Private: Apenas própria classe têm acesso aos atributos e métodos.
● Protected: Apenas a própria classe ou a classe herdada possui acesso aos atributos e métodos.
```

```ts
class Pessoa {
   private nome: string;
   private idade: number;

   constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
      this.exibirDados();
   }

   private exibirDados(): void {
      alert(`Nome: ${this.nome}\nIdade: ${this.idade}`);
   }
}
```

### Herança

```text
A herança têm como objetivo separar suas classes. Imagine que temos um arquivo contendo duas
classes, utilizaremos essa estrutura apenas para fins didáticos, mas você pode criar dois arquivos distintos se
preferir:
```

```ts
class Veiculo {
   protected fabricante: string;
   protected modelo: string;
   protected valor: number;

   constructor() {
      alert('Construtor da classe Veículo');
   }
}

class Carro extends Veiculo {
   private direcaoHidraulica: boolean;
   private numeroPortas: number;

   constructor() {
      alert('Construtor da classe Carro');
   }
}

class Moto extends Veiculo {
   private cilindradas: number;
   private partida: string;
}
```

### Metodo Super

```text
O método super serve para executar o construtor da classe pai de maneira automática.
```

```ts
class Carro extends Veiculo {
   private direcaoHidraulica: boolean;
   private numeroPortas: number;

   constructor() {
      super(); // executar o construtor da classe pai no caso Veículo
      alert('Construtor da classe Carro');
   }
}
```

### Polimorfismo

```text
Polimorfismo é uma técnica onde duas classes possuam métodos de mesmo nome, onde um método
sobrepõe o outro.
```

```ts
class Produto {
   // Metodo de mensagem
   mensagem(): void {
      alert('Mensagem do Produto');
   }
}

class Produto2 extends Produto {
   constructor(parameters) {
      super();
      this.mensagem();
   }

   mensagem(): void {
      alert('Mensagem do produto 2');
   }
}
```

### Classe Abstrata

```text
Classes abstratas servem para criar padrões obrigatórios e atributos e métodos.

Interessante utilizar esse conceito em projetos de média ou grande porte para uma melhor organização.

Uma classe abstrata não pode ser instanciada, apenas herdada.
```

```ts
abstract class AlimentosAbstracao {
   // Atributos obrigatórios
   abstract nome: string;
   abstract marca: string;
   abstract valor: number;

   // Metodos obrigatorios
   abstract listar(): void;
   abstract cadastrar(): boolean;

   // Metodos que podem ser utilizados por outras classes
   exibirDados(): void {
      alert(`${this.nome}\n${this.marca}\n${this.valor}`);
   }
}

class Arroz extends AlimentosAbstracao {
   nome: string;
   marca: string;
   valor: number;

   listar(): void {
      throw new Error('Method not implemented.');
   }
   cadastrar(): boolean {
      throw new Error('Method not implemented.');
   }
}
```

### Herança

```text

Serve para Padronizar o projeto se fazendo obrigatória
quando implementada.
```

```ts
interface IUsuario {
   nome: string;
   idade: number;
}

// Obriga a classe usuario a implementar os
// atributos / metodos da interface IUsuario se não da erro assim
// fazendo com que os programadores mantenham um padrão
class Usuario implements IUsuario {
   nome: string;
   idade: number;
}
```

```text
Diferença entre classe abstrata e Interface

Classe abstrata só pode ser extendida 1
Interface pode ser implementada varias só ir separando por Virgula.
```
