//EXERCÍCIO 05
function dividirFrase(frase){
    console.log(frase.split(" "))
}
dividirFrase("essa é uma frase de exemplo")

//EXERCÍCIO 06
let pontos = 0
function calcularPontos(vitoria, empate){
    pontos = (vitoria * 3) + empate
    console.log("total de pontos: " + pontos)
}
calcularPontos(5, 2)

//EXERCÍCIO 07
function contarVogais(frase){
    let vogais = "aeiouáéíóú"
    let contador = 0
    frase = frase.toLowerCase()

    for(let i=0; i < frase.length; i++){
        if(vogais.includes(frase[i])){
            contador++
        }
    }
    console.log(contador)
}

contarVogais("Olá, tudo bem?")