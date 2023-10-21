// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoNasc = Number(prompt("Digite seu ano de nascimento"))
let anoAtual = 2023

let idade = anoAtual - anoNasc

if (idade < 16) {
    document.write("Não pode votar")
} else if (idade >= 16 && idade < 18) {
    document.write("Voto é opcinal")
} else if (idade >= 18 && idade <= 70) {
    document.write("Voto é obrigatório")
} else {
    document.write("Voto é opcional")
}