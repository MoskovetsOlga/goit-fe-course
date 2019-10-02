/*
* К pen уже подключен Handlebars.
* Используй встроенные шаблоны и метод Handlebars.compile
*
* Создай шаблон элемента списка указаного на вкладке HTML.
* Отрендери список в DOM по данным из массива products.
*/

// const products = [
//   { name: "Apples", quantity: 50 },
//   { name: "Grapes", quantity: 44 },
//   { name: "Cheese", quantity: 128 },
//   { name: "Milk", quantity: 93 }
// ];

// const root = document.querySelector('.products');
// const template = document.querySelector('#productsTemplate').innerHTML.trim();

// const templateScript = Handlebars.compile(template);
// console.log(templateScript);

// // const markup = templateScript(products);
// // const markup = products.map(element => templateScript(element)).join('');

// function render(arr) {
//   return arr.map(el => templateScript(el));
// }
// const markup = render(products).join('');

// console.log(markup);

// root.insertAdjacentHTML('beforeend', markup);


// =====================================================
// task 2

const posts = [
  {
    title: "Phasellus volutpat metus",
    text:
      "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
    favourite: true
  },
  {
    title: "Nulla consequat massa",
    text:
      "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    favourite: false
  },
  {
    title: "In enim justo",
    text:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
    favourite: true
  },
  {
    title: "Vestibulum ante ipsum",
    text:
      "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
    favourite: false
  }
];

// const root = document.querySelector('.posts');

// const postTemplate = document.querySelector('#postTemplate').innerHTML.trim();

// const postScript = Handlebars.compile(postTemplate);

// const markup = postScript(posts);

// root.insertAdjacentHTML('beforeend', markup);

// console.log(markup);


const root = document.querySelector('.posts');
const postTemplate = document.querySelector('#postTemplate').innerHTML.trim();

const templateScript = Handlebars.compile(postTemplate);

const renderPost = arr => arr.map(el => templateScript(el));

const markup = renderPost(posts).join('').trim();

root.insertAdjacentHTML('afterbegin', markup)