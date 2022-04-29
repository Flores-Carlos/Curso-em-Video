let vetor = document.getElementById("selVetor")
let res = document.getElementById("res")
let btnConcluir = document.getElementById("btnConcluir")
vetor.style.opacity = 0
btnConcluir.style.opacity = 0
let i = 0
let maior, menor, soma = 0
let num = []

function isNumber(n) {
    return (n >= 1 && n <= 100) ? true : false
}

function adicionar() {
    num[i] = document.getElementById("txtNum").value

    if (num[i].length == 0) {
        alert("[ERRO] Digite um número.")
    } else if (!isNumber(Number(num[i]))) {
        alert("[ERRO] Digite um número válido.")
    } else {
        let n = Number(num[i])
        vetor.style.opacity = 1
        soma += n
        if (i == 0) {
            maior = n
            menor = n
        } else if (n > maior) {
            maior = n
        } else if (n < menor) {
            menor = n
        }
        let item = document.createElement("option")
        item.text = `Adicionado: ${n}`
        item.value = `tab${++i}`
        vetor.appendChild(item)
        btnConcluir.style.opacity = 1
    }
}

function concluir() {
    let media = soma / i
    res.innerHTML = `Total de números: <strong>${i}</strong> <br>
    Menor valor: <strong>${menor}</strong><br>
    Maior valor: <strong>${maior}</strong><br>
    Soma total: <strong>${soma}</strong><br>
    Média: <strong>${media}</strong>`
}