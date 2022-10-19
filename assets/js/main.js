// Evento entrar cadastro
const ImgLogin = document.querySelector('.button-login');
const EntrarLogin = document.querySelector('.entrar-login');

ImgLogin.addEventListener('click', function() {

  if(EntrarLogin.style.display === 'flex') {
    EntrarLogin.style.display = 'none';
  } else {
    EntrarLogin.style.display = 'flex'; 
  }

});

const FecharLogin = document.querySelector('.fechar-login');
const ConteinerEntrarLogin = document.querySelector('.entrar-login');

FecharLogin.addEventListener('click', function() {

  if(EntrarLogin.style.display === 'flex') {
    EntrarLogin.style.display = 'none';
  } else {
    EntrarLogin.style.display = 'flex'; 
  }

});

// Evento mostrar botão COMPRAR AGORA

const GridVendas = document.querySelector('.grid-vendas');

GridVendas.addEventListener('mouseover', function() {
  
 const BotaoComprar = document.querySelector('.botao-comprar');

 BotaoComprar.style.display = 'flex';

});

GridVendas.addEventListener('mouseout', function() {
  
  const BotaoComprar = document.querySelector('.botao-comprar');
 
  BotaoComprar.style.display = 'none';
 
 });

 const GridVendas2 = document.querySelector('.grid-vendas');

GridVendas2.addEventListener('mouseover', function() {
  
 const BotaoComprar2 = document.querySelector('.botao-comprar');

 BotaoComprar2.style.display = 'flex';

});

GridVendas2.addEventListener('mouseout', function() {
  
  const BotaoComprar2 = document.querySelector('.botao-comprar');
 
  BotaoComprar2.style.display = 'none';
 
 });

 