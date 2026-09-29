function carregar(){
    let mensagem = document.getElementById('mensagem')
    let img = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    
    if (hora < 12){
        mensagem.innerHTML = `Agora são ${hora}hrs.<br> <strong>BOM DIA!</strong>`  
        img.src = 'imagens/manha.webp'
        document.body.style.background = '#87CEEB'
    }else if (hora < 18){
        mensagem.innerHTML = `Agora são ${hora}hrs.<br> <strong>BOA TARDE!</strong>`    
        img.src = 'imagens/tarde.webp'
        document.body.style.background = '#FFB86B'
    }else{
        mensagem.innerHTML = `Agora são ${hora}hrs.<br> <strong>BOA NOITE!</strong>`    
        img.src = 'imagens/noite.webp'
        document.body.style.background = '#101E33'
    }
}