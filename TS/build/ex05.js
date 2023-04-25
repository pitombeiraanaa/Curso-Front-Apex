"use strict";
//Crie uma classe chamada Conta com propriedades de número, titular e saldo. Crie métodos para depositar, sacar e consultar saldo. Crie uma instância dessa classe e teste os métodos.
class Conta {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
// Criando uma instância da classe Conta e testando seus métodos
const minhaConta = new Conta('1234-5', 'Fulano de Tal', 1000);
console.log(minhaConta.consultarSaldo()); // Output: 1000
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo()); // Output: 1500
minhaConta.sacar(200);
console.log(minhaConta.consultarSaldo()); // Output: 1300
