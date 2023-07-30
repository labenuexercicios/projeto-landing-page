const verificaValorInserido = () => {
    const elementoNome = document.getElementById("nome").value
    const elementoEmail = document.getElementById("email").value
    const elementoCelular = document.getElementById("celular").value
    

    if(elementoNome !== "" && elementoEmail !== "" && elementoCelular !== ""){
        ///alert(`Formulário enviado com sucesso!`)
        
        console.log(`Formulário enviado com sucesso`)
    } else {
        //alert(`Favor preencher todos os campos.`)
        console.log(`Favor preencher todos os campos.`)
    }
    
}

