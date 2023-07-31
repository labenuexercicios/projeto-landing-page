document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.getElementById("btnLogin");
  const formularioCadastro = document.getElementById("formularioCadastro");

  btnLogin.addEventListener("click", function () {
    formularioCadastro.style.display = "block";
  });
})

function coletarInformacoes() {
      // Obter o valor digitado no input
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (email.trim() === "") {
        // Verificar se nada foi digitado
    alert("Nada foi digitado. Por favor, digite um endereço de e-mail.");
  } else {
        // Exibir mensagem com o e-mail e limpar o input
    alert("Entraremos em contato através do endereço " + email);
    emailInput.value = "";
  }
}

document.getElementById('close-menu').addEventListener('click', function(closeMenu) {
  document.getElementById('close-menu').checked = false;
})