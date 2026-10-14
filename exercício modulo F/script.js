
let num = document.getElementById('numero')
let select = document.getElementById('selec-numero')
let res = document.querySelector('div#res')
let valores = []

function adicionar(){
    let numero = Number(num.value)
    if(numero === '' || numero > 100 || numero < 1){
        window.alert('Número inválido ou sem número')
    }else if(valores.indexOf(Number(num.value)) != -1){
        window.alert(`O número ${numero} já foi adicionado`)
        num.value = ''
        num.focus()
    }else{

        let option = document.createElement('option')
        valores.push(Number(num.value))
        option.textContent = `O valor ${numero} foi adicionado`
        select.appendChild(option)
        select.size = valores.length
        num.value = ''
        num.focus()
        res.innerHTML = ''
    }
}

function finalizar(){
    if(select.options.length == 0){
        window.alert('[erro] adicione ao menos 1 número')
    }else{
        //total de valores 
        let p1 = document.createElement('p')
        p1.innerHTML = `Ao todo temos ${valores.length} valores`
        res.appendChild('p')

        //maior valor
        let p2 = document.createElement('p')
        p2.innerHTML = ``
        res.appendChild('p')

        //menor valor
        let p3 = document.createElement('p') 
        p3.innerHTML = ``
        res.appendChild('p')

        //soma de valores
        let p4 = document.createElement('p') 
        p4.innerHTML = ``
        res.appendChild('p')

        //media dos valores
        let p = document.createElement('p') 
        p5.innerHTML = ``
        res.appendChild('p')

    }
}