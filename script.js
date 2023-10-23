// DOM //

//ao clicar o botao, ele redireciona para outra pagina moradia.html //
const outraPagina = () => {
  window.location.href = "moradia.html";
}
document.getElementById("botao-moradia").addEventListener("click", outraPagina);


//exibe nome no console//
const exibirNome = () => {
    console.log(document.getElementById("nome").value);
}

//exibe email no console//
const exibirEmail = () => {
    console.log(document.getElementById("email").value);
}

//exibe textarea sobre vc no console//
const exibirInformacoes = () => document.getElementById("sobre").value;


// exibe mensagem quando clica no botão
const exibaMensagem = () => {
    const nome = document.getElementById("nome").value; 
    const email = document.getElementById("email").value; 
    const informacoes = document.getElementById("sobre").value; 

    // Verifica se o campo de email não está vazio e se o textarea não está vazio
    if (email.trim() !== "" && informacoes.trim() !== "") {
        alert(`Entraremos em contato através do email ${email}`);
    } else {
        alert("Nada foi digitado na caixa de email ou informações, por favor insira seu email e informações e tente novamente!");
    }
}

document.getElementById("meuBotao").addEventListener("click", exibaMensagem);
