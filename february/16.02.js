class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Животное ${this.name} издает звук`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`Собака ${this.name} лает`);
    }  
}

let animal = new Animal("Страус");
let dog = new Dog("Стрелка");

dog.speak()

Array.prototype.sum = function(...args) {
    let sum = 0;
    args.forEach((arg) => {
        sum += arg;
    })
    return sum;
}

let test = [1,2,3];
console.log(test.sum(...test))

class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

}   

class Car extends Vehicle {
    constructor (name, speed) {
        super(name, speed);
    }

    moveOn(distance) {
        return `За ${distance/this.speed} часов автомобиль ${this.name} достиг цели`
    }
}

let car = new Car("BMW", "120");
console.log(car instanceof Vehicle)

class MathUtils {
    static PI = 3.1415;

    static circleArea(radius) {
        return this.PI*radius**2;
    }

    static random(min, max) {
        return Math.floor(Math.random() *(max - min - 1) + min);
    }
}

console.log(MathUtils.PI); // 3.1415
console.log(MathUtils.circleArea(10)); // 314.15
console.log(MathUtils.random(1, 10)); // случайное число от 1 до 10
