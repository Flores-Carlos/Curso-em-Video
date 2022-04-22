var hora = new Date().getHours()

console.log(`Agora é exatamente ${hora} hora(s).`)
if (hora < 0 || hora >= 24) {
    console.log("Horário inválido!")
} else if (hora >= 0 && hora < 12) {
    console.log("Bom dia!")
} else if (hora >= 12 && hora < 18) {
    console.log("Boa Tarde!")
} else if (hora >= 18) {
    console.log("Boa noite!")
} else {
    console.log("Isso nem é um horário, Zé Mané!")
}