const somar = (numero1, numero2) => {
  return numero1 + numero2
}

const subtrair = (numero1, numero2) => {
  return numero1 - numero2
}

const multiplicar = (numero1, numero2) => {
  return numero1 * numero2
}

const dividir = (numero1, numero2) => {
  return numero1 / numero2
}

// module.exports = { !!!!(versão antiga)!!!!!!
//   somar,
// }


// versão nova
export { somar}