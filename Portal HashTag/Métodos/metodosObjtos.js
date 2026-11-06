// METODOS NATIVOS PARA OBJETOS
const produto = {
    nome: 'Laptop',
    preço: 3000,
    disponibilidade: true
}

//Object.keys(parametro)
// Retorna um ARRAY com as chaves do objeto
console.log(Object.keys(produto))

//Object.values(Parametro)
// Retorna um ARRAY com os valores do objeto
console.log(Object.values(produto))

//Object.entries(prarametro)
// Retorna um ARRAY com um par de lista e valores
console.log(Object.entries(produto))

//Object.assign(objeto, {chave: valor})
//Cria uma nova propriedade
Object.assign(produto, {categoria: "Eletrônico"})
console.log(produto)

//Object.defineProperty(objeto, "propriede para mudar",{value: novo valor})
//define ou modifica uma propriedade existete
Object.defineProperty(produto, 'disponibilidade', {value: false})
console.log(produto)

//Object.assign(objeto destino, copia/origem, copia2/origem2)
//junta dois obetos em um só
let pessoa = {
    nome: "Carlos",
    idade: 28
}

let trabalho = {
    profissao: "engenheiro",
    cidade: 'Imbituba'
}

let funcionario = {}
Object.assign(funcionario, pessoa, trabalho)
console.log(funcionario)

//Object.defineProperty(objeto, "outra propriedade", {value: , confuguraçoes...})
//adiçao de propriedade. Para ela mostrar na tela é preciso comfugurala
Object.defineProperty(funcionario, "Salário", {
    value: 10000,
    enumerable: true,
    writable: true,
    configurable: true
})
console.log(funcionario)

//delete
delete funcionario.nome
console.log(funcionario)