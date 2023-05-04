'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn-close-modal')
const btnsOpenModal = document.querySelectorAll('.btn-show-modal')

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

const logButton = document.querySelector('.button')

logButton.addEventListener('click', function (e) {
  e.preventDefault()

  let nameInput = document.querySelector('#inputName')
  let telefoneInput = document.querySelector('#inputNumber')
  let emailInput = document.querySelector('#inputEmail')
  let passwordInput = document.querySelector('#inputPassword')
  let validation = document.querySelector('#validation')

  if (!nameInput.value || !isNaN(nameInput.value)) {
    validation.textContent = 'Por favor, digite um nome válido.';
    return;
  } else {
    validation.textContent = '';
  }

  if (isNaN(telefoneInput.value) || telefoneInput.value.length < 11) {
    validation.innerHTML = 'Por favor, digite um telefone válido'
    return
  } else {
    validation.innerHTML = ''
  }

  if (!emailInput.value || '') {
    validation.textContent = 'Por favor, digite um e-mail válido.';
    return;
  } else {
    validation.textContent = '';
  }

  if (!passwordInput.value || isNaN(passwordInput.value) || passwordInput.value.length < 6) {
    validation.textContent = 'Por favor, digite um password válido.';
    return;
  } else {
    validation.textContent = '';
  }

  nameInput.value = ''
  telefoneInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''

  modal.classList.add('hidden')
  overlay.classList.add('hidden')

  alert('Formulário enviado com sucesso')

})




