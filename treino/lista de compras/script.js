function adicionar(){
    let lista = document.getElementById('lista')
    let resposta = document.getElementById('iteninput')
    let li = document.createElement('li')
    let span = document.createElement('span')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'concluircompra')
    let iten = document.createElement('p')
    let remover = document.createElement('span')
    remover.setAttribute('onclick', 'remover()')
    remover.setAttribute('class', 'remove')
    remover.innerHTML = 'x'

    span.appendChild(checkbox)
    iten.innerHTML = resposta.value
    span.appendChild(iten)
    li.appendChild(span)
    li.appendChild(remover)
    lista.appendChild(li)

    resposta.value = ''

    //concluir compra

    li.addEventListener('click', function(){
       if (checkbox.style.backgroundColor === ''){
          checkbox.style.backgroundColor = 'rgb(217, 164, 65)'
          iten.style.color = '#9b9584'
          iten.style.textDecoration = 'line-through'

          contaconcluidos()
       } else {
            checkbox.style.backgroundColor = ''
            iten.style.color = ''
            iten.style.textDecoration = 'none'

            contaconcluidos()
        }
    })

    //remover

    remover.addEventListener('click', function(){
            li.remove()
            contaitens()
    })

    contaitens()
}

function teclaEnter(event){
  if (event.key == "Enter"){
    adicionar()
  }
}

function contaitens(){
  let totitens = document.querySelectorAll('li').length
  let mostrador = document.querySelector('.totalitens')
  mostrador.innerHTML = `${totitens} itens`
}

function contaconcluidos(){
  let contador = 0
  let checkboxes = document.querySelectorAll('.concluircompra')

  checkboxes.forEach(function(checkbox){
    if (checkbox.style.backgroundColor === 'rgb(217, 164, 65)'){
      contador++
    }
  })
  
  let mostradordeconcluidos = document.querySelector('.itensconcluidos')
  if (contador <= 0){
    mostradordeconcluidos.innerHTML = ''
  }else{
    mostradordeconcluidos.innerHTML = 'Concluídos: ' + contador
  }
}