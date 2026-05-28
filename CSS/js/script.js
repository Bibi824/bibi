let quantidade = 1;
const preco = 120;

function atualizarCarrinho() {
  document.getElementById("quantidade").innerText = quantidade;

  const total = preco * quantidade;

  document.getElementById(
    "valorTotal"
  ).innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

function aumentarQuantidade() {
  quantidade++;
  atualizarCarrinho();
}

function diminuirQuantidade() {
  if (quantidade > 1) {
    quantidade--;
    atualizarCarrinho();
  }
}