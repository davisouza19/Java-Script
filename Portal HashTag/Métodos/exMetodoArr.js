//EX 01
let carrinho = ['Produto A', `Produto B`]
carrinho.shift()
carrinho.push('Produto C')
console.log(carrinho)

//EX 02
let produtos = ['Produto X', 'Produto Y']
produtos.push('produto Z')
let produtos2 = ['Produto A', 'Produto B']
console.log(produtos.concat(produtos2))

//EX 03
var estoque = ['Lápis', 'Caderno', 'Estojo']
console.log(estoque.includes('Lápis'))
console.log(estoque.includes('Agenda'))

//EX 04
let numeros = [2, 5, 8, 1]
console.log("Resultado: " + numeros.some(
    function(numero){
        return numero > 7
    }
))
/*
Dá para usar uma arrow funcrion:
let numeros = [2, 5, 8, 1]
console.log("Resultado: " + numeros.some((numero => numero > 7)))
*/

//EX 05
let listaNumeros = [4, 6, 8, 2]
console.log("Resultado: " + listaNumeros.every((numero2) => numero2 > 3))