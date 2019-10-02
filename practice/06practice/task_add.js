'use strict';

let str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function () {
//   // return this;
//   const arr = this.split(" ");
//   const newArr = [];
//   for (let el of arr) {
//     newArr.push(el.replace(el[0], el[0].toUpperCase()));
//   }
//   return newArr.join(" ");
// };


// the same using MAP()

String.prototype.toJadenCase = function () {
  return this.split(" ").map(el => el.replace(el[0], el[0].toUpperCase())).join(' ');
};

console.log(str.toJadenCase()); // How Сan Mirrors Be Real If Our Eyes Aren't Real
console.log(str);





// let a = true && 2 && 21 && 10 && 15;
// console.log(a);   // 15

// console.log(2 && 1 && null && 0 && undefined); // null - null не переводится


// console.log(!!(5 && 6) === (5 && 6)); // false

// console.log(null || 2 && 3 || 4); // 3 - возвращает первое что правдиво


// let aa = [1, 2, 3];
// let bb = [1, 2, 3];
// console.log(aa == bb); // false

// console.log(+"Infinity");   // infinity
// console.log(typeof +"Infinity");  // number


// console.log("apple" < "hedgehog"); // true
// console.log("яблоко" < "ежик"); // false  - "я" в алфавите позже "е"

// console.log(0 || '' || 2 || undefinde || true || false); // 2


// const aaa = [1, 2, 3];
// const result = aaa.shift() - aaa.pop();
// console.log(result); // -2

// console.log((1 && 2) || (0 && 3)); // 2



// const items = [95, 145, 33, 11];
// const noop = value => value;

// for (var i = 0; i < items.length; i++) {
//   noop(items[i]);
// }

// const resultz = i;
// console.log(resultz); // 4



//////////////

// const SimpleNumber = function (value) {
//   return value;
// }

// const number = new SimpleNumber(2000);
// const result = number === 2000;

// console.log(number);  // object
// console.log(result);  // false


