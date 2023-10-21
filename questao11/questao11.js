// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let opcao = prompt(`Qual turno você estuda? <br> 'M'- Matutino <br> 'V'- Vespertino <br> 'N'- Noturno`);

switch (opcao) {
    case "m":
        document.write("Bom Dia");
        break;
    case "v":
        document.write("Boa Tarde");
        break;
    case "n":
        document.write("Bom Noite");
        break;
    default:
        document.write("Valor inválido");
}