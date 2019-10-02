/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({ maxSpeed = 0, price = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this._price = price;
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости 
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */
  }

  /*
  * Добавь к классу Car из предыдущего задания статический
  * метод getSpecs, который принимает объект-машину как параметр
  * и выводит в консоль значения полей maxSpeed, speed, running и distance.
  */
  static getSpecs(obj) {
    console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running}, distance: ${obj.distance}`);
  }

  /*
  * Добавь классу Car свойство цены автомобиля, назови его сам.
  * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
  */
  get value() {
    return this._price;
  }
  set value(newValue) {
    this._price = newValue;
  }


  turnOn() {
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
  }

  turnOff() {
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (spd <= this.maxSpeed) {
      this.speed = spd;
    }
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (spd <= this.maxSpeed && spd >= 0) {
      this.speed = spd;
    }
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if (this.running) {
      this.distance = this.speed = hours;
    }
  }
}

// const car = new Car({ maxSpeed: 100 });




// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100



const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
