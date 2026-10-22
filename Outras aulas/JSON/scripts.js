const objs = [
    {
        nome: 'mateus',
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao:{
            profissao: 'programador',
            empresa: 'empresa x'
        },
        hobbies: ['programar', 'correr', 'ler']
    },

    {
        nome: 'joao',
        idade: 23,
        esta_trabalhando: false,
        detalhes_profissao:{
            profissao: null,
            empresa: null
        },
        hobbies: ['jogar', 'Academia']
    },
]


//JSON
//converter objeto para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

console.log('--------------------------------------------------------')
//converter JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)
console.log(typeof objData)

objData.map((pessoa, i) => {
    console.log(i+1 + 'ª pessoa: ' + pessoa.nome)
})
