function checarNacionalidade() {
    var pais = document.getElementById("pais")
    var nacionalidade = document.getElementById("nacionalidade")

    if (pais.value == "Brasil" || pais.value == "brasil" || pais.value == "br") {
        nacionalidade.innerHTML = "<p>Você é <strong>brasileiro</strong>.</p>"
    } else {
        nacionalidade.innerHTML = "<p>Você é <strong>estrangeiro<strong>.</p>"
    }
}