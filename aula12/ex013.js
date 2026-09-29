let agr = new Date()
let diaSem = agr.getDay()

/*
domingo = 0
segunda  = 1
terça = 2
quarta = 3
quinta = 4
sexta = 5
sabado = 6
*/

switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] dia invalido')
        return // para de roadar o codigo
}

if (diaSem == 0 || diaSem == 6){
    console.log('Fim de semana')
}else{
    let contador = 6 - diaSem
    console.log(`Dia de semana. Faltam ${contador} dias para o fim de semana`)
}
