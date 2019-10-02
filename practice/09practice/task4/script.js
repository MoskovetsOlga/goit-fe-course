/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Submit" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

let options = document.querySelector('.options');
let result = document.querySelector('.result');
let submit = document.querySelector('[type="submit"]')

function submitFn() {
  event.preventDefault();
  result.textContent = 'Result: ';

  let chosenElement = document.querySelector('input:checked');
  // console.log(chosenElement.value);
  let chosenLabelText = chosenElement.nextSibling;
  // console.dir(chosenLabelText);
  if (chosenLabelText.nodeName === '#text') {
    result.textContent += chosenLabelText.textContent.trim();
  }
}

submit.addEventListener('click', submitFn);
