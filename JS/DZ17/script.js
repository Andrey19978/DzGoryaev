//Создать класс Car c полями: марка, год выпуска, цвет.
//На основе класса Car создать три объекта с разными параметрами. 
class Car {
    constructor(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }

    getInfo() {
        return `${this.brand}, ${this.year}, ${this.color}`;
    }
}
// Creating objects of Car
const car1 = new Car("BMW", 2015, "Black");
const car2 = new Car("Audi", 2018, "Silver");
const car3 = new Car("Mercedes", 2020, "White");
// Printing information about each car
console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car3.getInfo());