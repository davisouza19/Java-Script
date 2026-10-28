// Função principal que recebe dois números e um callback.
// Ela executa o callback passando os dois números como argumentos.
function calcular(a, b, cb){
    cb(a,b)
}

// Callback responsável por somar os dois números.
function somar(a, b){
    console.log('Soma: ' + (a+b))
}

// Callback responsável por multiplicar os dois números.
function multiplicar(a, b){
    console.log(`multiplicaçao: ${a*b}`)
}

calcular(5, 10, somar)
calcular(5, 10, multiplicar)