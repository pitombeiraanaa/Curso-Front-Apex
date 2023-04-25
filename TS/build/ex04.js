"use strict";
//Crie uma classe chamada Calculadora com métodos para somar, subtrair, multiplicar e dividir. Crie uma instância dessa classe e teste os métodos.
class Calculadora {
    somar(n1, n2) {
        console.log(n1 + n2);
    }
    subtrair(n1, n2) {
        console.log(n1 - n2);
    }
    multiplicar(n1, n2) {
        console.log(n1 * n2);
    }
    dividir(n1, n2) {
        console.log(n1 / n2);
    }
    constructor() { }
}
let conta = new Calculadora();
conta.somar(2, 3);
