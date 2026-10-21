let amigo = {
    nome: 'josé',
    sexo: 'masculino',
    peso: 60,
    idade: 18
}

for(let chave in amigo){
    console.log(chave + ': ' + amigo[chave])
}