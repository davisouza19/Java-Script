var texto = 'JavaScript é legal'

function detectorTexto(t, cb){
    return cb(t)
}

function lowerCase(t){
    return t.toLowerCase()
}

function UpperCase(t){
    console.log(t.toUpperCase())
}

function Tamanho(t){
    console.log(t.length)
}

console.log(detectorTexto(texto, lowerCase))
detectorTexto(texto, UpperCase)
detectorTexto(texto, Tamanho)
