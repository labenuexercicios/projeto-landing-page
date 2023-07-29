function abrirMenu(){
    let barraMenuAberto = document.getElementById ('barra-menu')

    if( barraMenuAberto.style.width == "0px"){
        barraMenuAberto.style.width = "280px"
    }else{
        barraMenuAberto.style.width = "0px"
    }
}

const enviar = () => {
    let email = document.getElementById("email")
   
   if(email.value == "") {
   alert("Preencha o campo de e-mail")
   } else{
   alert('Entraremos em contato pelo e-mail: ' + email.value)
   email.value = ""
   
   }
   }