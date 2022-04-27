let res = document.getElementById("res")
let tab = document.getElementById("selTab")
tab.style.opacity = 0

function gerarTabuada() {
    let n = document.getElementById("txtNum").value
    if (n.length == 0) {
        res.innerHTML = "[ERRO] Número não digitado."
    } else {
        res.innerHTML = "Tabuada: "
        tab.style.opacity = 1
        tab.innerHTML = ""
        n = Number(n)
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${n} X ${i} = ${n * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}