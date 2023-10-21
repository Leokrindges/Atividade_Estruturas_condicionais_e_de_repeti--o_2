// Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

let idade = prompt("Digite a idade para saebr se pode doar sangue");

if(idade >= 18 && idade <= 67) {
    document.write(`Você tem ${idade} anos, por isso, PODE doar sangue`);
} else {
    document.write(`Você tem ${idade} anos, por isso, NÂO pode doar sangue`);
}