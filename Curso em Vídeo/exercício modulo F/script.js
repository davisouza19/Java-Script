
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
        valores.sort((a, b) => a - b)
        //total de valores 
        let p1 = document.createElement('p')
        p1.innerHTML = `Ao todo temos ${valores.length} valores`
        res.appendChild(p1)

        //maior valor
        let p2 = document.createElement('p')
        p2.innerHTML = `O maior valor digitado foi ${valores[valores.length - 1]}`
        res.appendChild(p2)

        //menor valor
        let p3 = document.createElement('p') 
        p3.innerHTML = `O menor valor digitado foi ${valores[0]}`
        res.appendChild(p3)

        //soma de valores
        let soma = 0
        for(let c = 0; c < valores.length; c++){
            soma += valores[c]
        }

        let p4 = document.createElement('p') 
        p4.innerHTML = `A soma dos valores é ${soma}`
        res.appendChild(p4)

        //media dos valores
        let p5 = document.createElement('p') 
        p5.innerHTML = `A média dos valores é ${soma/valores.length}`
        res.appendChild(p5)

    }
}