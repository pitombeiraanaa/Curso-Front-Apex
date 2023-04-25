"use strict";
//Crie uma classe chamada Pessoa com as propriedades nome e idade. Crie uma classe chamada Funcionario que herda de Pessoa e adicione uma propriedade salário. Crie uma instância de Funcionario e imprima todas as suas propriedades.
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Funcionario extends Pessoa {
    constructor(salario, nome, idade) {
        super(nome, idade);
        this.salario = salario;
    }
}
let funcionario = new Funcionario(5, 'Fulano', 1);
console.log(funcionario);
