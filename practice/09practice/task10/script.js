/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// MINE
// let jsMenu = document.querySelector('.js-menu');

// function handleMenuItem(event) {
//   event.stopPropagation();
//   event.preventDefault();
//   // console.log(event);
//   // console.dir(event);
//   // console.dir(event.target.parentNode.parentNode.children);
//   // console.log(Array.from(event.target.parentNode.parentNode.children));
//   Array.from(event.target.parentNode.parentNode.children).forEach(childEl => {
//     // console.log(childEl.children);
//     let [link] = childEl.children;
//     // console.log(link);
//     link.classList.remove('active')
//   }
//   );
//   event.target.classList.add('active');
// }

// jsMenu.addEventListener('click', handleMenuItem);


const menu = document.querySelector('.js-menu')

const changeColor = function (event) {
  event.preventDefault();
  if (event.target === menu) {
    return;
  }

  const active = document.querySelector('.active');
  active.classList.remove('active');
  event.target.classList.add('active');
}

menu.addEventListener('click', changeColor)