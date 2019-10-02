/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// mine
/*
let button = document.querySelector('.button');

let clickCounter = 0;

function addClicks() {
  clickCounter += 1;
  button.textContent = clickCounter;
}

button.addEventListener('click', addClicks);

*/

const button = document.querySelector('.button');

function increment() {
  //v1
  // let current = +button.textContent;
  // current += 1;
  // button.textContent = current;
  // console.log(current);

  //v2
  button.textContent++;
}

button.addEventListener('click', increment)