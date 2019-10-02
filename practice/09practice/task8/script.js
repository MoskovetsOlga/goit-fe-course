/*
  Напишите скрипт который:

    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно
      отображаться в p.input-value
*/

// MINE

// let message = document.querySelector('.message');
// let input = document.querySelector('.input');
// let inputValue = document.querySelector('.input-value');

// function showMessage() {
//   message.textContent = 'Input is in focus!';
// }
// function hideMessage() {
//   message.textContent = '';
// }
// function showText() {
//   inputValue.innerHTML = 'Current input value: ';
//   inputValue.textContent += input.value;
// }


// input.addEventListener('focus', showMessage);
// input.addEventListener('blur', hideMessage);

// input.addEventListener('input', showText);



//////////////////////

const input = document.querySelector('.input');
const message = document.querySelector('.message');
const inputValue = document.querySelector('.input-value');

input.addEventListener('focus', () => {
  message.textContent = 'Input is in focus!'
})

input.addEventListener('blur', () => {
  message.textContent = ''
})

input.addEventListener('input', event => {
  inputValue.textContent = event.target.value;
})