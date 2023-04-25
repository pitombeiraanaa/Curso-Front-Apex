// Peça para o usuario escrever uma frase;

// se a frase que ele escreveu tiver menos de 50 caracteres deverá perguntar novamente a frase até que a mesma seja preenchida com o tamanho minimo

// em seguida percorrer essa frase
// e todas as letras que forem vogais
// trocar dar um replace por um numero
// gerado aleatoriamente com o Math.

let frase

do {
  frase = prompt('Digite uma frase com no mínimo 50 caracteres:')
} while (frase.length > 50)

document.write(`A frase digitada foi: ${frase} <br> <br>`)

let alterarFrase = frase.replace(/a|e|i|o|u/gi, Math.random())

document.write(
  `Alterando as vogais da frase com o objeto Math fica assim: <br> <br> ${alterarFrase}`
)
