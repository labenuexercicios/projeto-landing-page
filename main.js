document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const closeDropdown = document.querySelector('.close-dropdown');

  dropdownToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  closeDropdown.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdownMenu.classList.remove('show');
  });

  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});


