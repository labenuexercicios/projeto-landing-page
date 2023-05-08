const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.lista');
const links = document.querySelectorAll('.lista li');

hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburguer.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburguer.classList.remove('active');
    });
});


function botaoLimpa() {
  document.getElementById("nome"). value = ""
  document.getElementById("email"). value = ""
}
