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

const GridVendas1 = document.querySelector('#grid-vendas1');
   GridVendas1.addEventListener('mouseover', function() {
const BotaoComprar1 = document.querySelector('#botao-comprar1');
   BotaoComprar1.style.display = 'flex';
});
GridVendas1.addEventListener('mouseout', function() {
   const BotaoComprar1 = document.querySelector('#botao-comprar1');
   BotaoComprar1.style.display = 'none';
 });

const GridVendas2 = document.querySelector('#grid-vendas2');
   GridVendas2.addEventListener('mouseover', function() {
 const BotaoComprar2 = document.querySelector('#botao-comprar2');
   BotaoComprar2.style.display = 'flex';
});
GridVendas2.addEventListener('mouseout', function() { 
   const BotaoComprar2 = document.querySelector('#botao-comprar2');
   BotaoComprar2.style.display = 'none';
 });

 const GridVendas3 = document.querySelector('#grid-vendas3');
   GridVendas3.addEventListener('mouseover', function() {
 const BotaoComprar3 = document.querySelector('#botao-comprar3');
   BotaoComprar3.style.display = 'flex';
});
GridVendas3.addEventListener('mouseout', function() { 
   const BotaoComprar3 = document.querySelector('#botao-comprar3');
   BotaoComprar3.style.display = 'none';
 });

 const GridVendas4 = document.querySelector('#grid-vendas4');
   GridVendas4.addEventListener('mouseover', function() {
 const BotaoComprar4 = document.querySelector('#botao-comprar4');
   BotaoComprar4.style.display = 'flex';
});
GridVendas4.addEventListener('mouseout', function() { 
   const BotaoComprar4 = document.querySelector('#botao-comprar4');
   BotaoComprar4.style.display = 'none';
 });

 const GridVendas5 = document.querySelector('#grid-vendas5');
 GridVendas5.addEventListener('mouseover', function() {
const BotaoComprar5 = document.querySelector('#botao-comprar5');
 BotaoComprar5.style.display = 'flex';
});
GridVendas5.addEventListener('mouseout', function() { 
 const BotaoComprar5 = document.querySelector('#botao-comprar5');
 BotaoComprar5.style.display = 'none';
}); 

const GridVendas6 = document.querySelector('#grid-vendas6');
   GridVendas6.addEventListener('mouseover', function() {
 const BotaoComprar6 = document.querySelector('#botao-comprar6');
   BotaoComprar6.style.display = 'flex';
});
GridVendas6.addEventListener('mouseout', function() { 
   const BotaoComprar6 = document.querySelector('#botao-comprar6');
   BotaoComprar6.style.display = 'none';
 });

 const GridVendas7 = document.querySelector('#grid-vendas7');
   GridVendas7.addEventListener('mouseover', function() {
 const BotaoComprar7 = document.querySelector('#botao-comprar7');
   BotaoComprar7.style.display = 'flex';
});
GridVendas7.addEventListener('mouseout', function() { 
   const BotaoComprar7 = document.querySelector('#botao-comprar7');
   BotaoComprar7.style.display = 'none';
 });

 