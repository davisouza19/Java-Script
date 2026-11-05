//EX 01
let string = "Javascript é divertido"
let parte1 = string.slice(0, 10).toUpperCase()
let parte2 = string.slice(10)
console.log(parte1 + parte2)

/*
OUTRA FORMA DE RESPONDER (gabarito)
let string = "Javascript é divertido"
let resultado = string.replace("Javasript", "javascript".toUpperCase)
*/

//EX 02
let string2 = "Aprendendo Javascript"
let palavra = string2.slice(0, 10).toLocaleLowerCase()
console.log(palavra)

//EX 03
let texto = "Aprendendo Python"
console.log(texto.replace("Python", "Javacript"))

//EX 04
let compras = 'cadeira, mesa, sofa, armario'
let array = compras.split(', ')
array.splice(2, 1)
//array.splice(array.indexOf('sofa'), 1)   <--- outra forma
console.log(array)