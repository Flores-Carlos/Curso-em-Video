function contar() {
    let contador = document.getElementById("inicio").value
    let fim = document.getElementById("fim").value
    let passo = document.getElementById("passo").value
    let res = document.getElementById("res")
    if (contador.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = "[ERRO] Faltam dados."
    } else {
        res.innerHTML = ""
        if (Number(contador) < Number(fim)) {
            for (let i = Number(contador); i <= Number(fim); i += Number(passo)) {
                res.innerHTML += `${i}`
                res.innerHTML += (i + Number(passo) <= Number(fim)) ? ", " : "."
            }
        }
        if (Number(contador) > Number(fim)) {
            for (let i = Number(contador); i >= Number(fim); i -= Number(passo)) {
                res.innerHTML += `${i}`
                res.innerHTML += (i - Number(passo) >= Number(fim)) ? ", " : "."
            }
        }
    }
}