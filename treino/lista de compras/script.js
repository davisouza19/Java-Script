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
          checkbox.style.backgroundColor = '#d9a441'
          iten.style.color = '#9b9584'
          iten.style.textDecoration = 'line-through'
       } else {
            checkbox.style.backgroundColor = ''
            iten.style.color = ''
          iten.style.textDecoration = 'none'
        }
    })

    //remover

    remover.addEventListener('click', function(){
            li.remove()
    })
}