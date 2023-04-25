"use strict";
//Crie uma classe chamada Retângulo com propriedades de altura e largura. Crie métodos para calcular a área e o perímetro. Crie uma instância dessa classe e teste os métodos.
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    Area() {
        console.log(this.altura * this.largura);
    }
    perimetro() {
        console.log(2 * this.altura + 2 * this.largura);
    }
}
let retangulo = new Retangulo(10, 10);
retangulo.Area();
retangulo.perimetro();
