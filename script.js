
function enviarEmail() {


  const email = document.getElementById('email').value;

  
  if (email) {
    
    alert(`Entraremos em contato através do endereço ${email}`);
    
    document.getElementById('email').value = '';
  } else {
   
    alert('Por favor, digite um endereço de e-mail.');
  }

}
