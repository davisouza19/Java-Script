//EXERCÍCIO 02
let nomes = ["Carlos", "Beatriz", "Ana", "Davi"]
function ordenarNomes(nomes){
    nomes.sort()
    console.log(nomes)
}
ordenarNomes(nomes)

//EXERCÍCIO 03
function compararValores(valor1, valor2){
    return Boolean(valor1) && Boolean(valor2)
}
console.log(compararValores(5, "texto"))
console.log(compararValores(0, "texto"))
//EXERCÍCIO 04