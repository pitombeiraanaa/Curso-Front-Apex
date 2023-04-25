// Essa é uma frAse que tem mais de 50 caracteres. Feita para o exercicio!
// Essa é uma frase não tem 50 caracteres!

let frase

do {
    frase = prompt("Digite uma frase com no mínimo 50 caracteres:")
} while(frase.length < 50)

document.write(`A frase digitada foi: ${frase} <br><br>`)

let alterarFrase = frase.replace(/a|e|i|o|u/gi, Math.random())

document.write(`Alterando as vogais da frase com o objeto Math fica assim:<br><br> ${alterarFrase}`)

