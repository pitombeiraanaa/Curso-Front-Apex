// Calcule a média de diversas notas digitadas pelo usuário.

// Armazenar notas em um Array
// Peguntar se quer continuar, se sim perguntar outra nota
// Se não, fazer a média de todas as notas e mostrar em tela

// Armazenar notas
let notas = []

// Se quer continuar
let continuar

// Laco
do {
    notas.push(parseFloat(prompt("Digite uma nota:")))

    continuar = confirm("Deseja continuar?")
} while (continuar == true) // Enquanto continuar for Ok

// Definir a variavel soma como 0
let soma = 0

// Variavel indice = 0 / Enquanto indice for menor que quantidade de notas / indice mais 1
for(let indice = 0; indice < notas.length; indice++){
    // Variavel soma que é igual a 0 += notas na posicao indice
    soma += notas[indice]
}

// Variavel para media
let media = soma/notas.length

// Mostrar na tela a media
document.write("A média é " + media.toFixed(2))