function carregar() {
    var mensagem = document.getElementsByTagName("div")[0]
    var imagem = document.getElementById("paisagem")
    var hora = new Date().getHours()

    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = "img/manha.jpg"
        document.body.style.background = "gold"
    } else if (hora >= 12 && hora < 18) {
        imagem.src = "img/tarde.jpg"
        document.body.style.background = "orange"
    } else {
        imagem.src = "img/noite.jpg"
        document.body.style.background = "lightblue"
    }
}