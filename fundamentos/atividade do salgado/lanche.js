const coxinha = parseFloat(prompt("Digite o valor do primeiro salgado:"));
const presunto_queijo = parseFloat(prompt("Digite o valor do segundo salgado:"));

const sprit = parseFloat(prompt("Digite o valor do primeiro refrigerante (2L):"));
const coca = parseFloat(prompt("Digite o valor do segundo refrigerante (2L):"));

const taxaEntrega = parseFloat(prompt("Digite o valor da taxa de entrega:"));


const total =
  coxinha +
  presunto_queijo +
  sprit +
  coca +
  taxaEntrega;

 
const pagarSozinho = prompt("Você vai pagar sozinho? (sim ou nao)").toLowerCase();

if (pagarSozinho === "sim") {
  alert(`O valor total a pagar é R$ ${total.toFixed(2)}`);
} else if (pagarSozinho === "nao") {

  const pessoas = parseInt(prompt("Em quantas pessoas o valor será dividido?"));

  if (pessoas > 0) {
    const valorPorPessoa = total / pessoas;

    alert(
      `O valor total foi R$ ${total.toFixed(2)}\n` +
      `Dividido entre ${pessoas} pessoas\n` +
      `Cada pessoa pagará R$ ${valorPorPessoa.toFixed(2)}`
    );
  } else {
    alert("Número de pessoas inválido.");
  }

} else {
  alert("Resposta inválida. Digite apenas 'sim' ou 'nao'.");
}
