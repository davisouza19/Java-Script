let nome = 'davi'
function processarNome(nome, cb){
    cb(nome)
}

function saudar(nome){
    console.log(`olá ${nome}`)
}

function despedir(nome){
    console.log(`tchal ${nome}`)
}

processarNome(nome, saudar)
processarNome(nome, despedir)