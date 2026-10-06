function contar(){
    let parametroinicio = document.getElementById('inicio').value
    let parametrofim = document.getElementById('fim').value
    let passos = document.getElementById('passo').value
    let mostrador = document.getElementsByClassName('mostrador')[0]

    if (parametroinicio === '' || parametrofim === '' || passos <= 0 ){
        window.alert('Verifique se há algum campo vazio ou passos <  ou = do que 0')
    }else{
        parametrofim = Number(parametrofim)
        parametroinicio = Number(parametroinicio)
        passos = Number(passos)

        mostrador.innerHTML = ''

        if (parametroinicio < parametrofim){
            for(contador = parametroinicio; contador <= parametrofim; contador += passos){
                mostrador.innerHTML += `${contador} \u{1f449} `
            }
        }else{
            for(contador = parametroinicio; contador >= parametrofim; contador -= passos){
            mostrador.innerHTML += `${contador} \u{1f449} `
            }
        }
        mostrador.innerHTML += `\u{1f3c1}`
    }
}