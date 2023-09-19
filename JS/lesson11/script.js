// const person = {
//     name: "John",
//     age: 25,
//     city: "California",
//     address: {  
//         street: "Russia",
//     },
// };
// for (let key in person) {
//     console.log(key);
//     console.log(person[key]);
// }
// person.name = "Alice";
// const personCopy = { ...person }
// personCopy.age = 22;
// personCopy.city = "Moscow";
// console.log(personCopy)

// for(let key in personCopy){
//     console.log(key + " : " + personCopy[key])
// }

// for(let key in person){
//     if(typeof person[key] === 'object'){
//         for(let i in person[key]){
//             console.log(`${person[key][i]}`)
//         }
//     }else{
//         console.log(`${person[key]}`)
//     }
// }
/////konstruc
// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// console.log(new A() == new B() );


// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//         console.log( "Меня зовут: " + this.name );
//     };
//   }
  
//   let john = new User("John");
  
//   john.sayHi();
// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );
  