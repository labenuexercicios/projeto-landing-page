// Seleciona o formulário e o botão de envio
const form = document.querySelector('form');
const submitBtn = document.querySelector('input[type=submit]');
// Adiciona um evento de clique ao botão de envio
submitBtn.addEventListener('click', (event) => {
	// Previne o comportamento padrão do botão de envio
	event.preventDefault();
	// Seleciona todos os campos de entrada
	const email = document.querySelector('#email');
	const telefone = document.querySelector('#phone');
	// Verifica se todos os campos estão preenchidos
	if (email.value && telefone.value) {
		// Exibe o alerta com a mensagem "Você criou sua conta"
		alert('Entraremos em contato ! ');
		// Envia o formulário
		form.submit();
	} else {
		// Caso contrário, exibe um alerta pedindo que o usuário preencha todos os campos
		alert('Por favor, preencha todos os campos do formulário.');
	}
});

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.conteudo-principal-escrito-titulo');
typeWrite(titulo);


