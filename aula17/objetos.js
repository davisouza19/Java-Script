// usando melhor as functions

let conta = {
    titular: 'Davi',
    saldo: 100,

    depositar: function(valor=0){
        this.saldo += valor
    },

    sacar: function(valor=0){
        if(valor > this.saldo){
            console.log('Saldo indisponível...')
        }else{
            this.saldo -= valor
        }
    },

    mostrarSaldo: function(){
        console.log(`${this.titular} possuí R$ ${this.saldo}`)
    },

}

conta.depositar(400) 
conta.sacar(150)
conta.mostrarSaldo()
