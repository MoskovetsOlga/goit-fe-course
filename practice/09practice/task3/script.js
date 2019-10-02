/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// let btnSub = document.querySelector('[data-action="sub"]');
// let btnAdd = document.querySelector('[data-action="add"]');
let [btnSub, btnAdd] = document.querySelectorAll('.btn');
let span = document.querySelector('.value');


// non class realization
{
  // let value = 0;
  // function increment() {
  //   value = Number(span.textContent) + 1;
  //   span.textContent = value;
  // }
  // function decrement() {
  //   if (Number(span.textContent)) {
  //     value = Number(span.textContent) - 1;
  //     span.textContent = value;
  //   }
  // }
  // btnAdd.addEventListener('click', increment)
  // btnSub.addEventListener('click', decrement)
}

// class realization 
function onChange() {
  span.textContent = this.value;
}

// class v1. my version
// class Counter {
//   constructor(onChange) {
//     this.value = Number(span.textContent);
//     this.onChange = onChange;
//   }
//   increment() {
//     this.value += 1;
//     this.onChange();
//   }
//   decrement() {
//     if (this.value) {
//       this.value -= 1;
//       this.onChange();
//     }
//   }
// }
// let counter = new Counter(onChange);

// btnAdd.addEventListener('click', counter.increment.bind(counter));
// btnSub.addEventListener('click', counter.decrement.bind(counter));

// class v2. bind inside class
class Counter {
  constructor(onChange) {
    this.value = Number(span.textContent);
    this.onChange = onChange;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.value += 1;
    this.onChange();
  }
  decrement() {
    if (this.value) {
      this.value -= 1;
      this.onChange();
    }
  }
}
let counter = new Counter(onChange);

btnAdd.addEventListener('click', counter.increment);
btnSub.addEventListener('click', counter.decrement);

