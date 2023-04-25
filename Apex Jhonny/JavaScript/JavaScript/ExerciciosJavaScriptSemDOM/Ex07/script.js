/* Peça ao usuário para digitar 5 números em uma caixa de texto. 
Verifique qual é o maior número e exiba-o.
*/

let numeros = []

for(let i = 0; i < 5; i++){
    let numero = parseFloat(prompt("Digite um número:"))
    numeros.push(numero)
}

let maximo = 0

for (let i = 0; i < 5; i++) {
    if(numeros[i] > maximo){
        maximo = numeros[i]
    }
}

document.write("O maior número da lista é: " + maximo)