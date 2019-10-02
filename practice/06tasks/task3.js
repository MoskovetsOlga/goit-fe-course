'use strict';

/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({ speed = 0, maxSpeed = 0, running = false, distance = 0 }) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.running = running;
    this.distance = distance;
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости 
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */
  }

  turnOn() {
    this.running = true; // !this.running;
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    if (this.maxSpeed >= spd) this.speed = spd;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if (this.maxSpeed >= spd && spd >= 0) this.speed = spd;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    if (this.running) this.distance += this.speed * hours;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
}

const car = new Car({ maxSpeed: 100 });
console.log(car);

car.turnOn();
console.log(car);

car.accelerate(80);
console.log(car);

car.drive(2);
console.log(car);

car.decelerate(20);
car.drive(0.5);
console.log(car);

console.log('///////////////////////////////////');

car.decelerate(-10);
console.log(car);
car.accelerate(120);
console.log(car);
car.turnOff();
car.drive(10);
console.log(car);