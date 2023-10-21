// Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.


// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.


let idade = prompt("Qual é a sua idade?");
let possuiHabilitacao = prompt("Possui habilitação? [S/N]")

if (idade >= 18 && (possuiHabilitacao == "s" || possuiHabilitacao == "S")) {
    document.write(`O motorista tem ${idade} anos, por isso, pode dirigir`);
} else {
    document.write(`O motorista tem ${idade} anos, por isso, NÃO pode dirigir`);
};


