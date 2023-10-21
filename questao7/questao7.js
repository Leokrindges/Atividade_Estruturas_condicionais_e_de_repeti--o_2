// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.
let contador = 10;
let soma = 0;

do {
    soma += contador;
    contador++;
} while (contador <= 100);

document.write(soma);