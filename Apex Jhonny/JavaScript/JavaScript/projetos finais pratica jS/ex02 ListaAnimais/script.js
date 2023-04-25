window.onload = async function () {
  let data = await (await fetch('http://localhost:3000/animais')).json()

  let ul = document.getElementById('lista')

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement('li')

    li.innerHTML = `<button onclick="deletarAnimal(${data[i].id})">Excluir</button>
                  - <strong>Nome</strong>: ${data[i].nome} 
                  - <strong>Tipo</strong>: ${data[i].tipo} 
                  - <strong>Idade</strong>: ${data[i].idade} 
                  - <strong>Gênero</strong>: ${data[i].genero}`

    ul.appendChild(li)
  }
}

const adicionarAnimal = event => {
  event.preventDefault()
  let nome = document.getElementById('nome').value
  let tipo = document.getElementById('tipo').value
  let idade = document.getElementById('idade').value
  let genero = document.getElementById('genero').value

  fetch('http://localhost:3000/animais', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome,
      tipo,
      idade,
      genero
    })
  })
}

const deletarAnimal = id => {
  fetch(`http://localhost:3000/animais/${id}`, {
    method: 'DELETE'
  })
}
