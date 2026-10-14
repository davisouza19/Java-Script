let a = [5, 88, 2, 9, 3]

a.push(1)   //adiciono um elemento
a.sort((a, b) => a - b) //deixa na ordem crescente
console.log(a)
console.log(`o vetor tem os valores ${a}`)
console.log(`o vetor tem ${a.length} posições`)
console.log(`o primeiro valor do vetor é ${a[0]}`)

let valor = 4
let posiçao = a.indexOf(valor)

if(posiçao != -1){
    console.log(`o valor ${valor} está na posiçao ${posiçao}`)
}else{
    console.log(`o valor ${valor} nao existe no array`)
}


/*
SORT()

O método sort() organiza os elementos de um array.
Por padrão, ele compara os valores como textos (strings).

Exemplo:
let a = [5, 10, 2, 9]
a.sort()
Resultado: [10, 2, 5, 9]

Para ordenar números corretamente em ordem crescente:
a.sort((a, b) => a - b)

- a e b são dois valores comparados pelo sort().
- => é uma forma curta de escrever uma função.
- a - b define a ordem numérica crescente.

Para ordem decrescente:
a.sort((a, b) => b - a)

OBS: se todos os números tiverem apenas um algarismo,
o sort() padrão pode produzir a ordem numérica correta.
*/
