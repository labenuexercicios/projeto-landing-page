// Menu Bar
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  NavMenu.classList.toggle('ativo');
})


//Input selecionar os estados
const estados = [
  'Selecione',
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
];

const select = document.getElementById('estados');
console.log(select)

estados.forEach((estado) => {
  const option = document.createElement('option');
  option.text = estado;
  select.add(option);
});

console.log(select)

function validarForm() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;


  if (nome == "" || email == "" || telefone == "") {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  } else {
    alert(`Dados enviados para ${nome} com sucesso! Agradecemos pelo contato!`)
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("estados").value = estados[0];
  }
}





