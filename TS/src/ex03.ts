//Crie uma interface chamada IAnimal com as propriedades nome e tipo. Crie uma classe chamada Animal que implementa a interface IAnimal e crie uma instância dessa classe.

interface IAnimal {
  nome: string
  tipo: string
}

class Animal implements IAnimal {
  constructor(public nome: string, public tipo: string) {
    this.nome = nome
    this.tipo = tipo
  }
}

const meuAnimal = new Animal('Rex', 'cachorro')
console.log(meuAnimal.nome, meuAnimal.tipo)
