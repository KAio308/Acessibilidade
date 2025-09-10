let tamanhoFonte = 100;

document.getElementById("aumentar-fonte").onclick = () => {
  if (tamanhoFonte < 200) document.body.style.fontSize = (tamanhoFonte += 10) + "%";
};
document.getElementById("diminuir-fonte").onclick = () => {
  if (tamanhoFonte > 50) document.body.style.fontSize = (tamanhoFonte -= 10) + "%";
};
document.getElementById("alterna-contraste").onclick = () => {
  document.body.classList.toggle("alto-contraste");
};

document.querySelectorAll(".btn.btn-custom.w-100").forEach(btn => {
  btn.onclick = () => {
    document.getElementById("carroSelecionado").value =
      btn.closest(".card").querySelector(".card-title").innerText;
    new bootstrap.Modal("#orcamentoModal").show();
  };
});

document.getElementById("form-orcamento").onsubmit = e => {
  e.preventDefault();
  let nome = nomeCliente.value, email = emailCliente.value,
    carro = carroSelecionado.value, msg = mensagemCliente.value;
  alert(`✅ Solicitação enviada!\n\nNome: ${nome}\nE-mail: ${email}\nCarro: ${carro}\nMensagem: ${msg}`);
  bootstrap.Modal.getInstance(document.getElementById("orcamentoModal")).hide();
  e.target.reset();
};
