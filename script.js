const inputField = document.getElementById('myInput');

inputField.addEventListener('input', function() {
  if (this.value === '') {
    console.log('O usuário não digitou nada no campo.');
  } else {
    console.log('O usuário digitou: ' + this.value);
  }
});