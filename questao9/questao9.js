// Informe um valor a uma variável e imprima no console se o número
// é primo.

let valor = 15;
let contador = 0;

for (let i = 1; i <= valor; i++) {
    if (valor % i == 0) {
        contador++;
    }
}

if (contador == 2) {
    document.write("É primo");
} else {
    document.write("Não é primo");
};