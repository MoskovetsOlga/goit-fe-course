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
  }

  static getSpecs(obj) {
    console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running}, distance: ${obj.distance}`);
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
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

const car = new Car({ maxSpeed: 100 });
car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100