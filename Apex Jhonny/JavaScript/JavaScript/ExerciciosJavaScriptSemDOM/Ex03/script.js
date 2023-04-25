let pedirCidade = prompt("Digite o nome da sua cidade:")

pedirCidade.toUpperCase()

let nomeCidade = pedirCidade.charAt(1) == "a" ? document.write(pedirCidade.replace('a','u')) : document.write(pedirCidade)