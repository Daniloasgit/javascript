function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19 //data.getHours()

    msg.innerHTML = `Agora são exatamente ${hora} horas`


    if (hora >=6 && hora < 12) {
        //Bom dia!
        document.getElementsByClassName('textout')[0].style.color = 'black'
        document.getElementsByClassName('textout')[1].style.color = 'black'
      img.src = 'amanhecer.png'
      document.body.style.background = '#6a739a'
    } else if (hora >=13 &&  hora <= 18) {
        //Boa tarde!
       img.src = 'tarde.png'
       document.body.style.background = '#f26800'
    } else {
        //Boa noite!
        img.src = 'noite.png'
       document.body.style.background = '#0c213c'
    }
}