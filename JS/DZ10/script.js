//1.Создайте пустой объект в JavaScript
let x = {
};


//2. Добавьте свойство "name" со значением "John" в объект.
let user = {
    name: "John"
};
// 4. Измените значение свойства "name" на "Alice".
user.name = "Alice";
//5. Удалите свойство "name" из объекта.
delete user.name;
//3. Получите значение свойства "name" из объекта.
console.log(user.name);
//6. Проверьте, существует ли свойство "age" в объекте.
console.log("age" in user);
//7. Создайте объект "person" с несколькими свойствами: "name", "age", "city".
let person = {
    name: "John",
    age: 25,
    city: "California",
    address: {  //14. Создайте вложенный объект "address" в объекте "person" с полями "street" и "zipcode".
        street: "Russia",
        zipcode: "Sochi",
    },
};
//8. Получите список всех ключей (свойств) из объекта "person".
//9. Получите список всех значений из объекта "person".
for (let key in person) {
    console.log(key);
    console.log(person[key]);
}
// 10. Проверьте, является ли объект "person" пустым.
console.log(person in user);
//11. Создайте копию объекта "person" с именем "personCopy".
let personCopy = { ...person }
//12. Объедините два объекта "person" и "personCopy" в один новый объект.
const obj3 = { ...person, ...personCopy }
console.log(obj3)
//15. Получите значение поля "street" из вложенного объекта "address".
console.log(person.address)
//16. Удалите вложенный объект "address" из объекта "person".
delete person.address;
//17. Проверьте, есть ли у объекта "person" свойство "proto".
console.log("proto" in person);
//18. Создайте конструктор объекта "Car" с параметрами "brand" и "model".
let car = {
    brand: "BMW",
    model: "1",
};
//19. Создайте экземпляр объекта "car1" с помощью конструктора "Car".
const car1 = { ...car }
//20. Добавьте метод "startEngine" в прототип объекта "Car".
car.startEngine = function () {
    console.log("Привет!");
};
car.startEngine(car1);
//22. Создайте объект "circle" с методом "calculateArea", вычисляющим площадь круга.
const circle = {
    plo: 0,
    calculateArea: function (x, y) {
        this.plo = x * y
    }
};
circle.calculateArea(3, 4)
console.log(circle.plo);
//23. Создайте объект "rectangle" с методом "calculateArea", вычисляющим площадь прямоугольника.
const circle1 = {
    plo: 0,
    calculateArea: function (x, y) {
        this.plo = x * y
    }
};
circle.calculateArea(3, 4)
console.log(circle1.plo);
//25. Создайте объект "book" с методами "setTitle" и "setAuthor" для установки заголовка и автора книги.
let book = {
    setTitle: "",
    setAuthor: "",
};


