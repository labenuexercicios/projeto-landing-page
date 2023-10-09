var currentLanguage = "Português";

function toggleLanguage() {
  var languageSpan = document.getElementById("language-span");
  var description = document.getElementById("description");
  var hireButton = document.querySelector(".hire-button");
  var copyright = document.querySelector(".copyright");
  var contatoButton = document.querySelector(".form-button");
  var formTitle = document.querySelector(".form-conteiner h1");
  var formDescription = document.querySelector(".form-conteiner p");

  if (currentLanguage === "Português") {
    languageSpan.textContent = "English";
    description.textContent =
      "4Safe is a company focused on digitizing security products. Its proposition is to offer life insurance, car insurance, and more to young customers who dislike the bureaucracy of traditional insurance companies.";
    hireButton.textContent = "Get a Quote Now!";
    copyright.textContent = "2023 Developed by Vitor Paes.";
    contatoButton.textContent = "Contact";
    formTitle.textContent = "4Safe Contact";
    formDescription.textContent = "We will contact you!";
    contatoButton.style.position = "initial";
    contatoButton.style.left = "initial";
  
    currentLanguage = "English";
  } else {
    languageSpan.textContent = "Português";
    description.textContent =
      "A 4Safe é uma empresa focada na digitalização dos produtos de seguridade. Sua proposta é oferecer seguros de vida, de carro e outros para clientes jovens que não gostam da burocracia das seguradoras tradicionais.";
    hireButton.textContent = "Contrate agora!";
    copyright.textContent = "2023 Desenvolvido por Vitor Paes.";
    contatoButton.textContent = "Contato";
    formTitle.textContent = "4Safe Contato";
    formDescription.textContent = "Nós entraremos em contato com você!";
    currentLanguage = "Português";
  }
}

function redirecionarParaForm() {
  var divForm = document.getElementById("form");

  if (divForm) {
    divForm.scrollIntoView();
  }
}

function verificarCadastro() {
  var email = document.querySelector('input[type="text"][name="email"]');

  if (email !== "") {
    window.alert("Contato realizado com sucesso!");
  } else {
    window.alert("Por favor, preencha o campo.");
  }
}
