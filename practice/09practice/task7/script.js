/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  - Если введено подходящее количество, то outline инпута становится зеленым,
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

let inputList = document.querySelector('.input-list');
let inputs = document.querySelectorAll('.input');

// MINE
// function inputCheck(event) {
//   event.stopPropagation();

//   if (event.target.value.trim().length > Number(event.target.dataset.length)) {
//     event.target.classList.add('invalid');
//     event.target.classList.remove('valid');
//   } else {
//     event.target.classList.add('valid');
//     event.target.classList.remove('invalid');
//   }

//   // console.dir(event.target);
//   // console.log(typeof event.target.dataset.length);
//   // console.log(typeof event.target.value.trim().length);
// }

// inputList.addEventListener('focusout', inputCheck)
// blur not works with bubbling

function inputCheck(e) {
  if (e.target.value.length >= e.target.dataset.length) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid')
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid')
  }
}
inputList.addEventListener('change', inputCheck)




