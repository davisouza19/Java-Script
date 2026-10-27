//callbacks sincrona
let exibir = (num) =>{
    console.log(`O resultado é ${num}`)
}

function soma(a, b, cb){
    let res = a + b
    cb(res)
}

function multiplicação(a, b, cb){
    let res = a * b
    cb(res)
}

soma(2, 2, exibir)

multiplicação(2, 4, exibir)
