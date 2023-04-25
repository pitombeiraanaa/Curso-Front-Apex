//Crie uma classe chamada Pessoa com as propriedades nome e idade. Crie uma classe chamada Funcionario que herda de Pessoa e adicione uma propriedade salário. Crie uma instância de Funcionario e imprima todas as suas propriedades.

class Pessoa {
  protected nome: string
  protected idade: number

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }
}

class Funcionario extends Pessoa {
  private salario: number

  constructor(salario: number, nome: string, idade: number) {
    super(nome, idade)
    this.salario = salario
  }
}

let funcionario = new Funcionario(5, 'Fulano', 1)
console.log(funcionario)
