
const form = document.querySelector('form');
const submitBtn = document.querySelector('input[type=submit]');
submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	const nome = document.querySelector('#nome');
	const email = document.querySelector('#email');
	if (nome.value && email.value) {
		alert('Obrigado!! Entraremos em contato!!');
		form.submit();
	} else {
		alert('Por favor, preencha todos os campos do formulário.');
	}
});