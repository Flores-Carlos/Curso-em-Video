function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.getElementById("txtano").value
    var res = document.getElementById("res")
    var idade = ano - anoNasc
    if (anoNasc > ano) {
        res.innerHTML = "Verifique os dados e tente novamente!"
    } else {
        var sex = document.getElementsByName("radsex")
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = "150px"
        if (sex[0].checked) {
            genero = "Homem"
            if (idade < 13) {
                //criança
                img.setAttribute('src', 'img/homem01.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "img/homem02.jpg")
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "img/homem03.jpg")
            } else {
                //idoso
                img.setAttribute("src", "img/homem04.jpg")
            }
        } else if (sex[1].checked) {
            genero = "Mulher"
            if (idade <= 12) {
                //criança
                img.setAttribute("src", "img/mulher01.jpg")
            } else if (idade <= 21) {
                //jovem
                img.setAttribute("src", "img/mulher02.jpg")
            } else if (idade <= 50) {
                //adulta
                img.setAttribute("src", "img/mulher03.jpg")
            } else {
                //idosa
                img.setAttribute("src", "img/mulher04.jpg")
            }
        }
        res.innerHTML = `${genero} com ${idade} ano(s).<br>`
        res.appendChild(img)
    }
}