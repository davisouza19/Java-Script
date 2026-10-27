/*
function subtraçao(a, b){
    return a - b;
}
*/
const subtraçao = (a, b) => a - b;

/*
function somar2(a){
    return a + 2;
}
*/
const somar2 = a => a + 2;

/*
function diaDoMes(){
    return new Date().getDate();
}
*/
const diaDoMes = () => new Date().getDate();

const SuperFunçao = (a, b) => { // com +1 de linha de instruções
    let subtraçao2 = a - b
    subtraçao2 -= 2
    let Ano = new Date().getFullYear();
    return Ano
}