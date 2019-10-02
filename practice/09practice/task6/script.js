/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

let list = document.querySelector('.list');

// MINE
// function deleteFn(event) {
//   event.stopPropagation();
//   console.log(event.target);
//   console.log(event.target.parentNode);

//   event.target.parentNode.remove();
// }

// list.addEventListener('click', deleteFn);



list.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    event.target.closest('li').remove();
  }
})