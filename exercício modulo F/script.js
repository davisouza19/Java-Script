function adicionar(){
    let campo = document.getElementById('numero')
    let numero = Number(campo.value)
    let select = document.getElementById('selec-numero')
    if(numero === '' || numero > 100 || numero < 1){
        window.alert('Número inválido ou sem número')
    }else{
        for(let c = 0 ; c < select.options.length ; c++){
            if(select.options[c].textContent == `O valor ${numero} foi adicionado`){
                window.alert(`O valor ${numero} já foi adicionado`)
                return
            }
        }
        let option = document.createElement('option')
        select.appendChild(option).innerHTML = `O valor ${numero} foi adicionado`
        select.size = select.options.length
        campo.value = ''
    }
}

function finalizar(){
     let select = document.getElementById('selec-numero')
     let campo = document.getElementById('numero')
     select.innerText = ''
     campo.value = ''
}