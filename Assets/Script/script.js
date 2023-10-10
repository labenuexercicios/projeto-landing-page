function irParaAbrirConta (){
var SessaoAbrirConta = document.getElementById ("Container-abrir-conta");
SessaoAbrirConta.scrollIntoView({behavior:"smooth"});
}

// script.js
function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');
  
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }
  
  document.addEventListener('click', function (e) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');
  
    if (!menu.contains(e.target) && e.target !== menuToggle) {
        menu.classList.remove('active');
  menuToggle.classList.remove('active');
    }
  });