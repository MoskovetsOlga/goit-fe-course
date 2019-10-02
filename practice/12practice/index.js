// 1

/*
 * Ознакомься с содержанием панелей HTML и CSS.
 *
 * Напиши скрипт который сохраняет выбранную пользователем
 * тему в localStorage и, при следующих посещениях страницы,
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 *
 * При выборе темы, добавляй на элемент body соответствующий класс.
*/



// const refs = {
//   body: document.querySelector('body'),
//   btnLight: document.querySelector('button[data-theme="light"]'),
//   btnDark: document.querySelector('button[data-theme="dark"]'),
// }

// if (!localStorage.getItem('theme')) {
//   refs.body.classList.add('theme-light');
//   localStorage.setItem('theme', 'light');
// } else if (localStorage.getItem('theme') === 'light') {
//   refs.body.classList.add('theme-light');
// } else if (localStorage.getItem('theme') === 'dark') {
//   refs.body.classList.add('theme-dark');
// }
// ;

// function setTheme({ target }) {
//   refs.body.className = '';
//   if (target.dataset.theme === 'light') {
//     refs.body.classList.add('theme-light');
//     localStorage.setItem('theme', 'light');
//   } else {
//     refs.body.classList.add('theme-dark');
//     localStorage.setItem('theme', 'dark');
//   }
// }

// console.dir(refs.body);

// refs.btnLight.addEventListener('click', setTheme);
// refs.btnDark.addEventListener('click', setTheme);


// 2 
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запущено, кнопка Start была не активна.
*/

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];


// function randomColor(arr) {
//   return Math.floor(Math.random() * arr.length);
// }

// const buttons = document.querySelectorAll('button');
// const body = document.body;

// let stepId;
// let isActive = false;

// const [start, stop] = buttons;

// start.addEventListener('click', () => {
//   if (!isActive) {
//     stepId = setInterval(() => {
//       body.style.backgroundColor = colors[randomColor(colors)];
//       console.log(stepId);
//     }, 1000)
//   }

//   isActive = true;
// })


// stop.addEventListener('click', () => {
//   clearInterval(stepId);
//   isActive = false;
// })


// 3

/*
 * Напиши функцию delay(ms), которая возвращает промис,
 * переходящий в состояние "resolved" через ms миллисекунд.
 *
 * Значением исполнившегося промиса должно быть то кол-во
 * миллисекунд которое передали во время вызова функции delay.
*/

// const logger = time => console.log(`Resolved after ${time}ms`);

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms)
//   })
// }

// setTimeout(() => {
//   console.log('hello 3');
// }, 1500
// )

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// console.log("hello 1");
// delay(1500).then(logger); // Resolved after 1000ms
// delay(1000).then(logger); // Resolved after 1500ms
// console.log('hello 2');


// 4

/*
 * Перепиши функцию updateActiveState так, чтобы она 
 * не использовала callback-функцию, а возвращала промис.
 */

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false }
];

// const updateActiveState = (users, callback) => {
//   const updatedUsers = users.map(user => ({ ...user, active: !user.active }));

//   callback(updatedUsers);
// };

// updateActiveState(users, console.table);

/*
 * Должно работать так
 *
 * updateActiveState(users).then(console.table);
*/
/*
const updateActiveState = (users) => {
  return new Promise((resolve, rejsct) => {
    resolve(users.map(user => ({ ...user, active: !user.active })));
  })
};
updateActiveState(users).then(console.table);
*/



/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
*/

const DELAY = 500;
const quantity = 100;

const processOrder = (value, delay) => {

  return new Promise((resolve, reject) => {
    if (!isNaN(value)) {
      setTimeout(() => {
        if (value <= quantity) {
          resolve('Ваш заказ готов!')
        } else {
          reject('К сожалению на складе недостаточно товаров!')
        }
      }, delay)

    } else {
      reject('Некорректный ввод!')
    }
  })
}




// Вызовы функции для проверки
processOrder(50, 1000)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(50, 2000)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500, 3000)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder("lorem", 4000)
  .then(console.log)
  .catch(console.log); // Некорректный ввод!
