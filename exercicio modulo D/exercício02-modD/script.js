function verificar(){
    let data = new Date()
    let anoatual = data.getFullYear()
    let nacimento = document.getElementById('ano')
    let resultado = document.getElementById('resultado')

    if (nacimento.value == 0 || Number(nacimento.value) > anoatual){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let idade = anoatual - Number(nacimento.value)
        let sexo = document.getElementsByName('sex')   
        let genero = ''
        let icon = document.createElement('i') //usado para criar um elemento html.
        icon.id = 'icone-genero'
        let fazevida = ''
        
        if (sexo[0].checked){
            genero = 'homem'
            icon.setAttribute('class', 'fa-solid fa-person')// criando uma class para o elemento criado.
            icon.style.background = '#0080ff89'
            if (idade >= 0 && idade < 10 ){
                fazevida = 'criança'
            } else if (idade < 18){
                fazevida = 'adolecente'
            }else if (idade < 60){
                fazevida = 'adulto(a)'
            }else if (idade >= 60){
                fazevida = 'idoso(a)'
            }
        }else if (sexo[1].checked){
            genero = 'mulher'
            icon.setAttribute('class', 'fa-solid fa-person-dress')// criando uma class para o elemento criado.
            icon.style.background = '#ffc0cbdf'
            if (idade >= 0 && idade < 10 ){
                fazevida = 'criança'
            } else if (idade < 18){
                fazevida = 'adolecente'
            }else if (idade < 60){
                fazevida = 'adulto(a)'
            }else if (idade > 60){
                fazevida = 'idoso(a)'
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} ${fazevida} com ${idade} anos.`
        resultado.appendChild(icon) //adicionando o elemento criado
    }
}

//<i class="fa-solid fa-person"></i> - homem
//<i class="fa-solid fa-person-dress"></i> - mulher