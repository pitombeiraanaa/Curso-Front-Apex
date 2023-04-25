function BuscarDadosCep(event) {
  event.preventDefault()
  let loading = document.getElementById('loading')
  let cep = document.getElementById('cep').value

  if (cep.length < 8) {
    alert('Favor informar um cep Valido')
    return
  }

  loading.style.display = 'flex'

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        document.getElementById('logradouro').value = data.logradouro
        document.getElementById('complemento').value = data.complemento
        document.getElementById('bairro').value = data.bairro
        document.getElementById('localidade').value = data.localidade
        document.getElementById('uf').value = data.uf

        loading.style.display = 'none'
        console.log(data)
      }, '1000')
    })
    .catch(error => {
      loading.style.display = 'none'
      alert('Erro ao buscar dados do CEP')
    })
}
