
console.log('orci')

// innerHTML é a parte que pode ser alterada
// capturando local para atualizar valores
const botaoPreco1El = document.getElementById("precos1")
const botaoPreco2El = document.getElementById("precos2")
const botaoPreco3El = document.getElementById("precos3")
const botaoPreco4El = document.getElementById("precos4")
// atualizar aqui valores 

// define que o value de document.getElementById("precos1") será igual ao valor atribuido a valor1
const valor1 = 250.99// valor 1 é 250
botaoPreco1El.value=valor1// o value do id será igual a valor1
console.log(botaoPreco1El.value)
const valor2 = 450.50
botaoPreco2El.value=valor2
const valor3 = 350
botaoPreco3El.value=valor3
const valor4 = 100
botaoPreco4El.value=valor4
const valorTotalPedidos = 0

//adicionando evento de click.
// botaoPreco1El.addEventListener('click',()=>{valorTotalPedidos += valor1};



//innerHTML é para alterar o valor no html, vai receber = xxx
botaoPreco1El.innerHTML = (`R$ ${valor1.toFixed(2)}`.replace('.',','))
botaoPreco2El.innerHTML = (`R$ ${valor2.toFixed(2)}`.replace('.',','))
botaoPreco3El.innerHTML = (`R$ ${valor3.toFixed(2)}`.replace('.',','))
botaoPreco4El.innerHTML = (`R$ ${valor4.toFixed(2)}`.replace('.',','))
// console.log(botaoPreco1El.innerHTML)



let totPedidosEl =Number(document.getElementById("botaoPedidos").innerHTML)



// cria uma funcao que cada vez que for clicada no botao de cada item é somado o valor ao totPedidosEl.
const somar1 = (preco)=>{    
    totPedidosEl += preco
    console.log(totPedidosEl)     
    const totalPedidos = document.getElementById('botaoPedidos') 
    totalPedidos.innerHTML= totPedidosEl.toFixed(2)
};
// const somar2 = ()=>{    
//     totPedidosEl += valor2
//     console.log(totPedidosEl)        
// };
// const somar3 = ()=>{
//     totPedidosEl += valor3
//     console.log(totPedidosEl)
// };
// const somar4 = () =>{
//     totPedidosEl += valor4
//     console.log(totPedidosEl)
// };
// console.log("fim")