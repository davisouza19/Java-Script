//REQUISITO 01
function simularInvestimento(valorInicial, taxa, meses){
    let saldo = valorInicial

    for(let i = 0; i < meses; i++){
        saldo *= (1 + taxa / 100)
    }
    return saldo.toFixed(2)
}
console.log(simularInvestimento(1000, 1, 12))

//REQUISITO 02
//REQUISITO 03
//REQUISITO 04
//REQUISITO 05
//REQUISITO 06
//REQUISITO 07