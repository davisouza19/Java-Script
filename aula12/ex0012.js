let agr = new Date()
let hora = agr.getHours()
let min = agr.getMinutes()

console.log(`hora: ${hora}:${min}`)
if (hora < 6){
    console.log('boa madrugada')
}else if (hora < 12){
    console.log('bom dia')
}else if (hora < 18){
    console.log('boa tarde')
} else if (hora <= 23){
    console.log('boa noite')
}