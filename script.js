function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h`
    if(hora > 0 && hora < 12){
        foto.src = 'img/morning.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora < 18){
        foto.src = 'img/afternoon.jpg'
        document.body.style.background = '#b9846f'
    } else {
        foto.src = 'img/evening.jpg'
        document.body.style.background = '#515154'
    }
}
