// Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

let idade = prompt("Qual é a sua idade?");

if(idade >= 18) {
    document.write(`O motorista tem ${idade} anos, por isso, pode dirigir`);
} else {
    document.write(`O motorista tem ${idade} anos, por isso, NÃO pode dirigir`);
};