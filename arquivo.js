function verificarFormulario() {
  var inputNome = document.getElementById('nome');
  var inputEmail = document.getElementById('email');
  var inputTelefone = document.getElementById('telefone');

  var valorNome = inputNome.value.trim();
  var valorEmail = inputEmail.value.trim();
  var valorTelefone = inputTelefone.value.trim();

  if (valorNome !== '' && valorEmail !== '' && valorTelefone !== '') {
    alert('Muito obrigada pela confiança! \nEntraremos em contato com você através do email: \n' + valorEmail);
    inputNome.value = '';
    inputEmail.value = '';
    inputTelefone.value = '';
  } else {
    alert('Por favor, preencha todos os campos do formulário.');
  }
}
