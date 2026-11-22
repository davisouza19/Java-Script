//EXERCÍCIO 08
function maiorGasto(gastos){
    let vezes = 0
    for(let i = 0; i < gastos.length; i++ ){
        if(gastos[i] == Math.max(...gastos)){
            vezes++
        }
    }
    console.log("O maio gasto foi: " + Math.max(...gastos))
    console.log(`ele aparece: ${vezes} vez(es)`)

}
maiorGasto([10, 5, 20, 15])

//EXERCÍCIO 09
let soma = 0
function calcularMedia(numeros){
    for(let c = 0; c < numeros.length; c++){
        soma += numeros[c]
    }
    console.log("A média é: " + soma / numeros.length)
}
calcularMedia([10, 20, 30, 40])

//EXERCÍCIO 10
function ehPalidromo(palavra){
    let letras = palavra.split("")
    let reverso = letras.reverse()
    let junto = reverso.join("")

    if(palavra === junto){
        return true
    }else{
        return false
    }
}
console.log(ehPalidromo('ar'))