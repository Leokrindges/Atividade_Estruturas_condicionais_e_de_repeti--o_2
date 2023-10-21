// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let diaSemana = prompt("Digite um número de 1 a 7");

if (diaSemana == 1) {
    document.write("Domingo!");
} else if (diaSemana == 2) {
    document.write("Segunda!");
} else if (diaSemana == 3) {
    document.write("Terça!");
} else if (diaSemana == 4) {
    document.write("Quarta!");
} else if (diaSemana == 5) {
    document.write("Quinta!");
} else if (diaSemana == 6) {
    document.write("Sexta!");
} else if (diaSemana == 7) {
    document.write("Sabado!");
} else {
    document.write("Dia não reconhecido");
};