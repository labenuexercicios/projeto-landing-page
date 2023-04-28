document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const closeDropdown = document.querySelector('.close-dropdown');
  const sliders = document.querySelectorAll(".image-slider");
  const errorImage = document.getElementById('error-image');

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
  if (errorImage) {
    errorImage.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }
});
