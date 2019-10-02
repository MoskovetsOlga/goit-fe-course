/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


/*
Логика:
1) достучаться до элемента категорий UL
2) создать функцию, которая проходится по всему массиву детей, для которой выводит:
  - вывести название категории
  - вывести количество элементов категории

*/

// class version
const listArr = document.querySelectorAll('.categories > li');

const fn = (element) => {
  element.forEach(el => {
    console.dir(`
    Категория: ${el.firstChild.textContent.trim()}
    Количество вложенных li: ${el.children[0].childElementCount}
    `);
  })
};

fn(listArr);


/*
// version in 1 string

document.querySelectorAll('.categories > li').forEach(el => {
  console.dir(`
  Категория: ${el.firstChild.textContent.trim()}
  Количество вложенных li: ${el.children[0].childElementCount}
  `);
})
*/


/*
// my version

const categories = document.querySelector('.categories');
const categoryChildren = Array.from(categories.children);

categoryChildren.forEach(child =>
  console.dir(`
  Category: ${child.firstChild.textContent.trim()}
  Count li: ${child.children[0].childElementCount}
  `)
)
*/