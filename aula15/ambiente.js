let a = [5, 8, 2, 9, 3]

a.push(1)   //adiciono um elemento
a.sort() //deixa na ordem crescente
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