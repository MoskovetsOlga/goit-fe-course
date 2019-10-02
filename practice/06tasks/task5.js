'use strict';

/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({ price = 0, speed = 0, maxSpeed = 0, running = false, distance = 0 }) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.running = running;
    this.distance = distance;
    this._price = price;
  }

  static getSpecs(obj) {
    console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running}, distance: ${obj.distance}`);
  }

  get value() {
    return this._price;
  }
  set value(newValue) {
    this._price = newValue;
  }

  turnOn() {
    this.running = true;
  }
  turnOff() {
    this.running = false;
  }
  accelerate(spd) {
    if (this.maxSpeed >= spd) this.speed = spd;
  }
  decelerate(spd) {
    if (this.maxSpeed >= spd && spd >= 0) this.speed = spd;
  }
  drive(hours) {
    if (this.running) this.distance += this.speed * hours;
  }
}

/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
