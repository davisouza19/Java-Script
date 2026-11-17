//EXERCÍCIO 01
function NumerosArredondados(a){
    console.log("valor mais próximo: " + Math.round(a))
    console.log("Aredondado para cima: " + Math.ceil(a)) 
    console.log("Aredondado para baixo: " + Math.floor(a))  
}
NumerosArredondados(7.89)

//EXERCÍCIO 02
function Max_Min(a, b, c, d, e, f){
    let listaNumerica = [a, b, c, d, e, f]
    console.log("Valor max: " + Math.max(...listaNumerica))
    console.log("Valor min: " + Math.min(...listaNumerica))
}
Max_Min(10, 5, 20, 40, 1, 7)

//EXERCÍCIO 03
function aleatorios(num1, num2){
    let aleat01 = Math.random()
    let aleat02 = Math.random() * 100
    let aleat03 = Math.random() * (num2 - num1) + num1
    console.log("Aleatório entre 0 e 1: " + aleat01.toFixed(2))
    console.log("Aleatório entre 0 e 100: " + aleat02.toFixed(2))
    console.log(`Aleatório entre ${num1} e ${num2}: ${aleat03.toFixed(2)}`)
}
aleatorios(50, 100)

//EXERCÍCIO 04
function DiferençaDatas(){
    let data01 = new Date("2026-01-01")
    let data02 = new Date("2026-10-07")

    let diferença = data02 - data01
    let dias = (1000 * 60 * 60 * 24)
    console.log(diferença / dias + 1)
}
DiferençaDatas()

//EXERCÍCIO 05
function Datas(){
    let data = new Date("2026-12-25T00:00:00")
    console.log("dia: " + data.getDate())
    console.log("mês: " + (data.getMonth() +1))
    console.log("ano: " + data.getFullYear())
}
Datas()

//EXERCÍCIO 06
let datadeNascimento = "2011-05-19"
function CaucularIdade(datadeNascimento){
    let Nascimento = new Date(datadeNascimento)
    let Hoje = new Date() //data atual

    //Calcular idade pela diferença de anos:
    let idade = Hoje.getFullYear() - Nascimento.getFullYear()

    //Criar data de aniversário atual
    let aniversarioAtual = new Date(Hoje.getFullYear(), Nascimento.getMonth(), Nascimento.getDate()) //ANO, MES, DIA

    //Calcular a diferença de meses e dias (milissegundos)
    let diferençaDias = (Hoje - aniversarioAtual) / (1000 * 60 * 60 * 24)

    //ajuste de idade (já fez aniversário ou não)
    let ajuste = (diferençaDias < 0) * 1 //booleano tansformado em número
    idade -= ajuste
    console.log("Sua idade é: " + idade)
}

CaucularIdade(datadeNascimento)

//DESAFIO (pegar a data de nascimeto e botar no padrao br)
let DATA = new Date(2026, 10, 17)
console.log(DATA.toLocaleDateString("pt-BR"))