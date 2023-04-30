function enviar() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let mensagem = document.getElementById("mensagem");

  if (nome.value == "") {
    alert("Você necessita colocar seu nome");
  } else if (email.value == "") {
    alert("Você necessita colocar seu e-mail");
  } else if (mensagem.value == "") {
    alert("Você necessita colocar uma mensagem");
  } else {
    alert(" Cadastro enviado " + nome.value);
    nome.value = "";
    email.value = "";
    nome.value = "";
  }
}
