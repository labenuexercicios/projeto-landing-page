document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const closeDropdown = document.querySelector('.close-dropdown');
  const sliders = document.querySelectorAll(".image-slider");
  const contactForm = document.querySelector('.contact');

  sliders.forEach((slider) => {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slide');
    const slideCount = slides.length;

    slides[0].classList.add('active');

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slideCount;
      slides[currentSlide].classList.add('active');
    }, 3000);
  });

  // aqui verifica se os elementos existem na pagina e adicione um evento de clique para abrir e fechar o dropdown
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });
  }

  if (closeDropdown) {
    closeDropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      dropdownMenu.classList.remove('show');
    });
  }

  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message"); 

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (name === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
      }

      // Aqui, você pode enviar o formulário ou processar as informações conforme necessário
      console.log("Formulário enviado:", { name, email, message });
      contactForm.reset();
    });
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}