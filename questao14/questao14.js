// Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let numero = Number(prompt("Digite um número"))
let soma = numero
let ultimoValorAntesDe500 = 0

while (soma < 500) {
    numero *= 3
    soma += numero
}
ultimoValorAntesDe500 = numero / 3
document.write(`O ultimo valor antes de 500 foi ${ultimoValorAntesDe500}<br>`)
document.write(`O ultimo valor foi depois de 500 foi ${numero}`)