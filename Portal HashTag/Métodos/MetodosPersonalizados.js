const calculadora = {
    valor1: 0,
    valor2: 0,

    definirValores: function(v1, v2){
        this.valor1 = v1
        this.valor2 = v2
    },

    somar:function(){
        return this.valor1 + this.valor2
    },

    subtrair:function(){
        return this.valor1 - this.valor2
    },

    multiplicar:function(){
        return this.valor1 * this.valor2
    },

    dividir:function(){
        return this.valor1 / this.valor2
    },
}

calculadora.definirValores(10, 2)
console.log(`Valores: ${calculadora.valor1} ; ${calculadora.valor2}`)
console.log("soma: " + calculadora.somar())
console.log("Subtração: " + calculadora.subtrair())
console.log("Multiplicação" + calculadora.multiplicar())
console.log("Divisão" + calculadora.dividir())

calculadora.exponenciaçao = () => {return calculadora.valor1 ** calculadora.valor2} //arrow function não tem this
console.log("Exponenciação: " + calculadora.exponenciaçao())