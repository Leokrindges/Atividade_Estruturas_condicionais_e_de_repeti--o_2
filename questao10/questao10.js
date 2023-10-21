// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

let altura = Number(prompt("Digite a sua altura para saber o seu peso ideal."));
let sexo = prompt("Escolha '1' para FEMININO `/n` e '2' para MASCULINO");

let pesoIdeal;


switch (sexo) {
    case "1":
        pesoIdeal = (62.1 * altura) - 44.7;
        break;

    case "2":
        pesoIdeal = (72.7 * altura) - 58;
        break;
}
document.write(pesoIdeal);
