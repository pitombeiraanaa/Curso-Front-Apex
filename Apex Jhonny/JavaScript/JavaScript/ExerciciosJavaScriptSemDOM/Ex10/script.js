let nomes = []
let continuar = true;
// Adicionar os nomes na lista
do {
    let nome = prompt("Digite um nome");
    nomes.push(nome)
    continuar = confirm("Deseja continuar?")
} while (continuar == true);

let listOrdenada = nomes.sort();
for (let i = (listOrdenada.length - 1); i >= 0; i--) {
    document.write(listOrdenada[i] + "<br>");
}