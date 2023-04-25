/* Peça ao usuário para digitar várias idades. Exiba quantas 
pessoas são maior de idade (18 anos) e quantas são menores.
*/

let idades = []

let continuar = true

while (continuar == true) {
    let idade = parseInt(prompt("Digite um idade:"))
    idades.push(idade)

    continuar = confirm("Deseja continuar?")
}

let qtdMaior = 0
let qtdMenor = 0

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        qtdMaior++
    } else {
        qtdMenor++
    }
}

document.write(`A quantidade de menores de idade é ${qtdMenor} e maiores de idade é ${qtdMaior}`)