//  METODOS PARA STRING

let string = 'Olá, Mundo Mundo!'

//slice(start, end)
console.log(string.slice(0, 5))
console.log(string.slice(-6)) //de tras para frente

//substring(start, end)
console.log(string.substring(0, 5))

//substring(start, end)
console.log(string.substring(7, 3)) // mesmo que: sbustring(3, 7)
//Não aceita índices negativos: transforma valores negativos em 0.
//Se o índice inicial for maior que o final, ele inverte os valores automaticamente.

//replace(search, replaceWith)
console.log(string.replace('Mundo', 'Javascript')) //substitui apenas a primeira aparição de 'mundo' se tivesse outro nao seria alterado

//indexOf()
console.log(string.indexOf('á')) //procura se ouve um caso, se não encontrar mostra -1, se encontrar aparece o local

//split(delimitador, limite)
let frutas = 'banana,maçã,uva,limão,laranja'
/*transforma o texto em uma lista (array) separando pelo delimitador*/
console.log(frutas.split(","))//delimitador
console.log(frutas.split(",", 3))//delimitador + limite de elementos no array
/*É possivel usar expressões regulares como delimitador 
    ex: texto.split(/\s+/)
*/

//splice(): Adiciona, remove ou substitui elementos de um array,modificando o array original.
let array = frutas.split(",")
array.splice(1, 2)//retira
console.log(array)
array.splice(1, 0, "kiwi")//adiciona
console.log(array)
/**
 *
 * Sintaxe: array.splice(inicio, quantidade, elementos)
 * - inicio: índice onde começa a alteração.
 * - quantidade: número de elementos a remover.
 * - elementos: valores que serão adicionados (opcional).
 *
 * Também retorna os elementos removidos.
 */
