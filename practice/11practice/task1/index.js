/*
* К pen уже подключен Handlebars.
* Используй встроенные шаблоны и метод Handlebars.compile
* 
* Создай шаблон элемента списка указаного на вкладке HTML.
* Отрендери список в DOM по данным из массива products.
*/

const products = [
  { name: "Apples", quantity: 50 },
  { name: "Grapes", quantity: 44 },
  { name: "Cheese", quantity: 128 },
  { name: "Milk", quantity: 93 }
];

let root = document.querySelector('.products');
let template = document.querySelector('#prodTemplate').innerHTML.trim();
console.log(template);

let templateScript = Handlebars.compile(template);

let markup = templateScript(products);
console.log(markup);

root.innerHTML = markup;