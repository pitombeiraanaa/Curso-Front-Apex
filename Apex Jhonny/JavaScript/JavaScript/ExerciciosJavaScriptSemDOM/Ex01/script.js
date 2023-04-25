let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))

// Se nome começar com J
if (nome.toUpperCase().startsWith('J') && nome.toUpperCase().endsWith('A')) {
    document.write(`Seu nome é ${nome} começa com a letra "J" e termina com a letra "A". A sua idade é ${idade} anos. <br><br>`)
} else if (nome.toUpperCase().startsWith('J')) {
    document.write(`Seu nome é ${nome} e começa com a letra "J". A sua idade é ${idade} anos. <br><br>`)
    // Se nome começar com J
} else if (nome.toUpperCase().endsWith('A')) {
    document.write(`Seu nome é ${nome} e termina com a letra "A". A sua idade é ${idade} anos. <br><br>`)
    // Se nome não começar com J ou terminar com A
} else {
    document.write(`Seu nome é ${nome} e não começa com a letra "J" nem termina com a letra "A" e sua idade é ${idade} anos. <br><br>`)
}

// Enquanto a váriavel idade for menor que 60 criar um laço para contar de 2 em 2 até chegar em 60
for (let contador = idade; contador <= 60; contador += 2) {
    document.write(contador + " ")
}