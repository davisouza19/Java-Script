//  METODOS PARA LISTAS

let produtos = ['carrinho', 'boneca', 'bola']

//  adicionando
produtos.push(10, 50, 20) //ao final da lista
console.log(produtos)
produtos.unshift('video game') //no inicio da lista
console.log(produtos)

//  removendo
produtos.pop() //remove o ultimod
console.log(produtos)
produtos.shift() //remove o primeiro
console.log(produtos)



let letras = ["g", "j", "u", "a", "y", "b", "c"]
let numeros = [4, 19, 11, 0, 7, 6, 1]

//  ordenando
letras.sort()
console.log(letras)

numeros.sort()
console.log(numeros)

//  revertendo lista
letras.reverse() /* funciona para qualquer lista*/
console.log(letras)

//  junrtando listas
let MesclaLista = letras.concat(numeros)
console.log(MesclaLista)

//é possivel usar indexOf no arrey tmb

// splice(start, quantidade de elementos)
var frutas = ['maça', 'banana', 'laranja']
frutas.splice(0, 2)
console.log(frutas)

frutas.splice(0, 2, 'kiwi') //subistituir um elemento: inicio, quantidade, valor subistituido
console.log(frutas)



//  para ver se existe ou nao com retorno boolean
let alunos = ['Damião', 'Joao', 'Gustavo']
console.log(alunos.includes('Damião'))
console.log(alunos.includes('Maria'))

// every() -> localiza algo dentro de TODOS os elementos da lista *retorna em boolean
console.log(alunos.every(
    function(alunos){
        return alunos.includes('a' && 'd') /* pergunta se todos os elementos tem a */
}))

// some() -> localiza se ALGUM elemento possui algo dentro da lista *retorna em boolean
console.log(alunos.some(
    function(alunos){
        return alunos.includes('G')
    }
))

//join() -> transforma um arrray em uma frase
console.log(alunos.join(' - ')) /* virgula é padrao */