// Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let preco = Number(prompt("Qual foi o preco pago?"))
let formaPagamento = Number(prompt("Em quantas vezes sera pago?"))

let avista = 0.025
let de6a10Vezes = 0.06
let de11a15Vezes = 0.13
let valorParcela = 0;
let precoComJurosOuDesconto = 0


if (preco == 0 || formaPagamento <= 0 || formaPagamento > 15) {
    document.write("Preço e forma de pagamento não pode ser menor ou igual a 0")
} else
    if (formaPagamento == 1) {
        precoComJurosOuDesconto = preco - (100 * avista)
        document.write(`Pagamento à vista de R$ ${precoComJurosOuDesconto.toFixed(2)}`)
    } else
        if (formaPagamento >= 2 && formaPagamento <= 5) {
            valorParcela = preco / formaPagamento;
            document.write(`Pagamento em ${formaPagamento} vezes de R$ ${valorParcela}`)
        } else
            if (formaPagamento >= 6 && formaPagamento <= 10) {
                precoComJurosOuDesconto = preco + (100 * de6a10Vezes)
                valorParcela = precoComJurosOuDesconto / formaPagamento
                document.write(`Pagamento em ${formaPagamento} vezes de R$ ${valorParcela.toFixed(2)}`)
            } else
                if (formaPagamento >= 11 && formaPagamento <= 15) {
                    precoComJurosOuDesconto = preco + (100 * de11a15Vezes)
                    valorParcela = precoComJurosOuDesconto / formaPagamento
                    document.write(`Pagamento em ${formaPagamento} vezes de R$ ${valorParcela.toFixed(2)}`)
                } 