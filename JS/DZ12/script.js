//1
let a = +prompt('a?', 0);
let b = +prompt('b?', 0);
function nuum(a, b) {
    return a * b;
}
console.log(nuum(a, b))
//2
function readNumber() {
    check = true;
    while (check) {
      check = false;
      num = prompt("введите число", "число");
      if (num == null || num == '') {
        return null;
      } else if (!isNaN(num)) {
        return +num;
      } else {
        check = true;
      }
    }
}
readNumber();
//3
function random(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(Math.random());
//4
function randomInteger(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(randomInteger(32));