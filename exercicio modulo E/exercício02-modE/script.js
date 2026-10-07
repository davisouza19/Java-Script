/*
let numero = 9
let contador = 1
let tabuada = 0
while (contador <= 10){
    tabuada = numero * contador
    console.log(`${numero} x ${contador} = ${tabuada}`)
    contador++
}
*/

function calcular(){
    let numero = document.getElementById('num').value
    if (numero === ''){
        window.alert('[ERRO] Digite um número')
    }else{
        numero = Number(numero)
        let contador = 1
        let resultado = 0
        let tabuada = document.getElementById('tabuada')
        tabuada.innerHTML = ''

        while (contador <= 10){
            resultado = numero * contador

            let option = document.createElement('option')
            tabuada.appendChild(option).innerHTML = `${numero} x ${contador} = ${resultado}`
            contador++
        }
    }
    
}