// Com SWITCH

// Fazer pergunta sobre dia da semana
// Se for Seg, Ter, Qua, Qui ou Sex mostrar em tela que ele não pode brincar pois tem aula

// Se for Sabado ou Domingo 
// While
// Fazer loop perguntando o brinquedo que ele quer brincar

// Se ele Cancelar mostrar em ordem alfabetica todos os brinquedos que ele brincou

let diaSemana = prompt("Qual o dia da semana você faz aniversário?")
let brinquedos = []
let continuar = true

switch (diaSemana) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        document.write("Hoje você tem aula!")
        break
    default:
        while (continuar == true) {

            let brinquedo = prompt("Digite o brinquedo que você quer brincar:")
            brinquedos.push(brinquedo)

            continuar = confirm("Deseja brincar novamente?")
        }

        let brinquedosAlfabetico = brinquedos.sort()

        for (let i = 0; i < brinquedosAlfabetico.length; i++) {
            document.write("O brinquedo da vez foi: " + brinquedosAlfabetico[i] + "<br>")
        }
        break
}
