'use strict';

/*  
 * Напиши конструктор Storage(items), который будет создавать 
      объекты для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив 
      товаров, и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих 
 *    товаров
 * Добавь метод addItem(item), который получает новый товар 
 *    и добавляет его к текущим
 * Добавь метод removeItem(item), который получет товар и, 
 *    если он есть, удаляет его из текущих
*/

const Storage = function (items) {
  this.items = items;
  this.getItems = function () {
    return this.items;
  }
  this.addItem = function (item) {
    this.items.push(item);
  }
  this.removeItem = function (item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}


const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

