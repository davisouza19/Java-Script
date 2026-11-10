//EXERCÍCIO 1
console.log("-------CAIXA--------")
let venda = {
    produto:"Carro de Brinquedo",
    quantidade: 2,
    precoUnitario: 20,
    estoque: 10,

    calcularTotal: function(){
       this.total = this.precoUnitario * this.quantidade
       console.log("total: " + this.total)
    },

    detalharVenda: function(){
        console.log("Produto: " + this.produto)
        console.log("Estoque: " + this.estoque)
        console.log("Preço UN: " + this.precoUnitario)
    }
}

//EXERCÍCIO 2
Object.assign(venda, {aplicarDesconto: (a) => {
     venda.desconto = venda.total * a / 100  
    console.log("Subtotal: " + (venda.total - venda.desconto))
}})


//EXERCÍCIO 3
Object.assign(venda, {atualizarQuantidade: (a) => {
    Object.defineProperty(venda, "quantidade", {value: a, writable: true})  
    console.log("Quantidade: " + venda.quantidade)
}})


//EXERCÍCIO 4
Object.assign(venda, {verificarEstoque: function(){
    if(venda.estoque > venda.quantidade){
        console.log("Compra autorizada")
    }else{
        console.log("Estoque insuficiente")
    }
}})


//EXERCÍCIO 5
venda.detalharVenda()
venda.atualizarQuantidade(1)
venda.verificarEstoque()
venda.calcularTotal()
venda.aplicarDesconto(10) //quantos % de desconto
vericarDesconto()
console.log("---------NOTA---------")
console.log(Object.entries(venda))

//EXERCÍCIO 6
Object.defineProperty(venda, "data", {
    value: "2026-11-10",
    enumerable: false
})
console.log("data: " + venda.data)

//EXERCÍCIO 7
function vericarDesconto(){
    if(venda.desconto == 0){
        console.log('Sem desconto')
    }
}
