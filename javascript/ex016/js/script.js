function gerarTabuada() {
    let n = Number(document.getElementById("txtNum").value)
    let res = document.getElementById("res")
    res = ""
    for(let i = 0; i <= 10; i++){
        res.innerHTML += `${n} X ${i} = ${n * i}`
    }
}