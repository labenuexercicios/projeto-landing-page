function validarUsuario(event) {
    event.preventDefault();
   
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let sonho = document.getElementById('sonho').value;
    
    // Exemplo simples de validação
    if (nome !== '' && email !== '' && dataNascimento !== '' && sonho !== '') {
        alert('Formulário válido!');

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('dataNascimento').value = '';
        document.getElementById('sonho').value = '';

        return true;
    } else {
        alert('Por favor, preencha todos os campos!');
        return false;
    }
}
