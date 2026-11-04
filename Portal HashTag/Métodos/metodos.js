const nome = 'Davi'
console.log(nome.toUpperCase()) //metodo nativo

//criando metodos
let pessoa = {
    nome: 'Davi',
    saudar: function(){
        return `Olá, ${this.nome}`
    }
}

console.log(pessoa.saudar())