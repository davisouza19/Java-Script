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

function codificar(frase1){
    let frase_codificada = ""
    for(let i = 0; i < frase1.length; i++){
        if(frase1[i] === "a" || frase1[i] === "A"){
            frase_codificada += "1" 
        }else if(frase1[i] === "e" || frase1[i] === "E"){
            frase_codificada += "2" 
        }else if(frase1[i] === "i" || frase1[i] === "I"){
            frase_codificada += "3" 
        }else if(frase1[i] === "o" || frase1[i] === "O"){
            frase_codificada += "4" 
        }else if(frase1[i] === "u" || frase1[i] === "U"){
            frase_codificada += "5" 
        }else{
            frase_codificada += frase1[i]
        }
    }
    return frase_codificada
}

function decodificar(frase2){
    frase2 = frase2.replaceAll("1", "a")
    frase2 = frase2.replaceAll("2", "e")
    frase2 = frase2.replaceAll("3", "i")
    frase2 = frase2.replaceAll("4", "o")
    frase2 = frase2.replaceAll("5", "u")
    console.log(frase2)
}
let frase = codificar('A casa e o sol')
console.log("codificado: " + frase)
decodificar("decodificado: " + frase)