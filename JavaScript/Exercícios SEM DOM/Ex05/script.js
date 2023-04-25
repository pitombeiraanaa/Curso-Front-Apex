// pergunte para o usuario qual o dia da semana ele faz aniversário esse ano

// se for dia de semana escreva na tela
// que ele não poderá brincar pois tem escola

// se for sabado ou domingo

// Pergunte qual brinquedo ele quer ir brincar
// e adicione em uma lista.

// pergunte se ele quer brincar em mais algum

// se sim continue perguntando e adicionando na lista

// assim que ele responder que não quer mais
// brincar

// escreva em ordem alfabetica todos os brinquedos que ele brincou

let diaAniversario = prompt('Digite o dia da semana do seu aniversário:')

let brinquedos = []
let continuar = true

switch (diaAniversario) {
  case 'segunda':
  case 'terça':
  case 'quarta':
  case 'quinta':
  case 'sexta':
    document.write('Hoje você tem aula!')
    break
  default:
    while (continuar == true) {
      let brinquedo = prompt('Digite obrinquedo que você quer brincar:')
      brinquedos.push(brinquedo)

      continuar = confirm('Deseja brincar novamente?')
    }

    let brinquedosAlfabetico = brinquedos.sort()

    for (let i = 0; i < brinquedosAlfabetico.length; i++) {
      document.write(
        'O brinquedo da vez foi: ' + brinquedosAlfabetico[i] + '<br>'
      )
    }
    break
}
