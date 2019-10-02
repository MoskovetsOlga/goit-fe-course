/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

let [input1, input2] = document.querySelectorAll('input[type="text"]');
let result = document.querySelector('.result');
let button = document.querySelector('button[data-action="add"]');

let additionResult = 0;

// console.log(input1);
// console.log(input2);

function addInputs() {
  if (Number(input1.value) && Number(input2.value)) {
    additionResult = Number(input1.value) + Number(input2.value);
    result.textContent = additionResult;
  } else {
    alert(`Not a Number in input`);
  }
}

button.addEventListener('click', addInputs);



// const inputs = document.querySelectorAll('input');
