// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let totalEleitores = 100
let brancos = 5
let nulos = 10
let validos = 85
let porcentBrancos
let porcentNulos
let porcentValidos

let totalVotos = brancos + nulos + validos

if (totalEleitores == totalVotos) {
    porcentNulos = (nulos / totalEleitores) * 100
    porcentBrancos = (brancos / totalEleitores) * 100
    porcentValidos = (validos / totalEleitores) * 100

    document.write(`<p> Porcentagem de votos NULOS é de ${porcentNulos}% </p>`)
    document.write(`<p> Porcentagem de votos BRANCOS é de ${porcentBrancos}% </p>`)
    document.write(`<p> Porcentagem de votos VALIDOS é de ${porcentValidos}% </p>`)
} else {
    document.write("Número de votos não coincide com o total de eleitores")
}



