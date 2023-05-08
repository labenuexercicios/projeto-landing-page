const form = document.querySelector("#form")

const nameInput = document.querySelector("#name")

const  emailInput = document.querySelector("#email")

const messageTextarea = document.querySelector("#message")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se nome está vazio
    if(nameInput.value === "") {
    alert("Por favor, preencha seu nome");
    return;
    }

    //verifica se email está preenchidoe e é válido.
    if(emailInput.value === "") {
        alert("Por favor, preencha seu email");
        return;
    }

    //verifica se a mensagem está preenchida

    if(messageTextarea.value === "") {
        alert("Por favor, preencha a mensagem");
        return;
    }

    // se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});
