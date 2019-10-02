/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// class version

const list = document.querySelector('.list');

// var.1
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';

// var.2
list.firstElementChild.classList.add('red');
list.lastElementChild.classList.add('blue');

/*
//my vesion
const list = document.querySelector('.list');

list.firstElementChild.setAttribute('style', 'color: red');
list.lastElementChild.setAttribute('style', 'color: blue');
*/