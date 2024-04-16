function verificar () {
    var data = new Date()
    var ano = data.getFullYear ()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')




    if (fAno.value.lenght === 0 || Number (fAno.value > ano)) {
        alert('[ERRO] Verifique os dados e tente novamente') 
} else {
    alert('Prossiga no seu prossedimento')
    var fsex = document.getElementsByName('radsex')//sem [] por enquanto
    var idade = ano - Number(fAno.value) // calcular idade


    var img = document.createElement('img')
img.setAttribute('id','foto')


    res.innerHTML = `Idade calculada ${idade}` //para testar se sua conta está certa
    var genero = '' //getElementsByName []
    if (fsex[0].checked) {
    genero = 'Homem'

        if (idade >= 0 && idade < 10) {
            //criança
          img.setAttribute('src', 'foto-crianca-m.png')
        } else if (idade < 21) {
            //jovem
          
        } else if (idade < 50) {
            //adulto
          
        } else {
            //idoso
        
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher'

        if (idade >= 0 && idade < 10) {
            //criança
          
        } else if (idade < 21) {
            //jovem
          
        } else if (idade < 50) {
            //adulto
          
        } else {
            //idoso
        
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos! `
    res.appendChild(img)
}
}