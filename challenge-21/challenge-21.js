(function( win, doc ){
    'use strict';
/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/

var $text = doc.querySelector( '[data-js="data"]' );
var $start = doc.querySelector( '[data-js="start"]' );
var $stop = doc.querySelector( '[data-js="stop"]' );
var $reset = doc.querySelector( '[data-js="reset"]' );
var temporizador;

// $start.addEventListener( 'click', function timer(){
//     console.log( counter++ )
//     temporizador = setTimeout( timer, 1000 );
//     $text.value = counter;
// }, false );

// $stop.addEventListener('click', function () {
//   clearTimeout(temporizador);
// }, false);

// $reset.addEventListener('click', function () {
//   clearTimeout(temporizador);
//   $text.value = 0;
//   counter = 0;
// }, false);

//Melhor Prática:

$start.addEventListener( 'click', startTimer, false );
$stop.addEventListener( 'click', stopTimer, false );
$reset.addEventListener( 'click', resetTimer, false );

function startTimer(){
  $text.value = +$text.value + 1;
  temporizador = setTimeout( startTimer, 1000 );
}

function stopTimer(){
  clearTimeout( temporizador );
}

function resetTimer(){
  $text.value = 0;
  stopTimer();
}

})( window, document );
