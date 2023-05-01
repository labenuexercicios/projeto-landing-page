function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};


function validaFormulario() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let assunto = document.getElementById('assunto').value;
  let mensagem = document.getElementById('mensagem').value;
  if (!!email && !email.includes('@')) {
    alert("E-mail inválido");
  } else if (!!nome && !!email && !!assunto && !!mensagem) {
    alert("Enviado com sucesso");
    document.getElementById('nome').value = null;
    document.getElementById('email').value = null;
    document.getElementById('assunto').value = null;
    document.getElementById('mensagem').value = null;
  }
}

function showCards(cards) {
  let moradia = document.getElementById('cards-moradia');
  let reforma = document.getElementById('cards-reforma');
  let kitnets = document.getElementById('cards-kitnets');
  if (cards == 1) {
    reforma.style = 'display: block';
    moradia.style = 'display: none';
    kitnets.style = 'display: none';
    reforma.scrollIntoView();
  } else if (cards == 2) {
    reforma.style = 'display: none';
    moradia.style = 'display: block';
    kitnets.style = 'display: none';
    moradia.scrollIntoView();
  } else if (cards == 3) {
    reforma.style = 'display: none';
    moradia.style = 'display: none';
    kitnets.style = 'display: block';
    kitnets.scrollIntoView();
  }
}

function scrollElement(menu) {
  if (menu === 1) {
    var element = document.getElementById("home").scrollIntoView();
  } else if (menu === 2) {
    var element = document.getElementById("sobre").scrollIntoView();
  } else if (menu === 3) {
    var element = document.getElementById("servicos").scrollIntoView();
  } else if (menu === 4) {
    var element = document.getElementById("contato").scrollIntoView();
  }

}