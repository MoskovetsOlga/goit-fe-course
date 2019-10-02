/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// MINE
// let images = document.querySelector('.images');

// function showSrc(event) {
//   event.stopPropagation();
//   if (event.target.nodeName === 'IMG') {
//     alert(event.target.src);
//   }
// }

// images.addEventListener('click', showSrc);




const img = document.querySelector('.images');

img.addEventListener('click', function (event) {
  if (event.target.nodeName === 'IMG') {
    alert(event.target.src);
  }
})