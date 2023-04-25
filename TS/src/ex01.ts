//Crie uma classe que represente um carro e defina as propriedades de marca, modelo, ano e preço. Crie uma instância dessa classe e imprima suas propriedades.

class Carro {
  marca: string
  modelo: string
  ano: number
  preco: number

  constructor(marca: string, modelo: string, ano: number, preco: number) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.preco = preco
  }
}

let carro = new Carro('Volkswagen', 'Alemão', 1998, 1800)

console.log(carro)
