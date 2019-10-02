'use strict';

/*
  Есть список с классом .size-filter из произвольного
  количества чекбоксов, каждый из которых содержит
  размер одежды в фильтре.

  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.

  Возвращает массив значений атрибута value.
*/

/* 
логика
1) получить массив всех инпутов
2) найти те у кого состояник checked
3) создать функцию, которая получает массив инпутов из п.2
  3.1) обратиться к атрибуту value
  3.2) создать массив с атрибутом value
  3.3) вернуть массив

*/

/*
//v1
const inputs = document.querySelectorAll('input');
const arr = Array.from(inputs);
const filterByChecked = arr.filter(el => el.checked);
// console.dir(filterByChecked);

const collectInputData = (inputs) => {
  return inputs.map(el => el.value)
}

console.log(collectInputData(filterByChecked));
*/


//v2
const inputs = [...document.querySelectorAll('input:checked')];

const collectInputData = (inputs) => {
  return inputs.map(el => el.value)
}

console.log(collectInputData(inputs));
