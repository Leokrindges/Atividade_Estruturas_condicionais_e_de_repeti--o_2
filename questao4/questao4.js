// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”

// Reescreva o exercício 3, utilizando apenas o SWITCH.

let diaSemana = prompt("Digite um número de 1 a 7");

switch (diaSemana) {
    case "1":
        document.write("Domingo");
        break;
    case "2":
        document.write("Segunda");
        break;
    case "3":
        document.write("Terça");
        break;
    case "4":
        document.write("Quarta");
        break;
    case "5":
        document.write("Quinta");
        break;
    case "6":
        document.write("Sexta");
        break;
    case "7":
        document.write("Sabado");
        break;
    default:
        document.write("Dia não reconhecido");
}