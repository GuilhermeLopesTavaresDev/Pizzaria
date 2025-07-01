document.getElementById("formPedido").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const pizza = document.getElementById("pizza").value;
  const obs = document.getElementById("observacoes").value;

  const msg = `Olá! Meu nome é ${nome}. Quero pedir a pizza: ${pizza}.
Endereço: ${endereco}
Telefone: ${telefone}
Observações: ${obs}`;

  const whatsappURL = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
  window.open(whatsappURL, "_blank");
});
