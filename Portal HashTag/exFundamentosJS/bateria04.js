//EXERCÍCIO 14
const despesas = [150, 80, 200, 60, 120]
const resultado = []
function controledeDespesas(despesas){
    for(let i = 0; i < despesas.length; i++){
        if(despesas[i] > 100){
            resultado.push("Alto gasto")
        }else{
           resultado.push("Gasto controlato")
        }
    }
    return resultado
}
console.log(controledeDespesas(despesas))

//EXERCÍCIO 15
const investimentos = [5000, 2000, 15000];
investimentos.sort((a,b) => a - b)
const nome = "Maria";
const resultado2 = gerarListaInvestimentos(investimentos, nome);

function gerarListaInvestimentos(investimentos, nome){
    const investimentosMaisNome = []
    for (let c = 0; c < investimentos.length; c++){
        let objeto = {
            investimento: investimentos[c],
            nome: nome,
        }
        investimentosMaisNome.push(objeto)
    }
    return investimentosMaisNome
}
console.log(resultado2)
//EXERCÍCIO 16
