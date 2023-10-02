let a = +prompt('a?', 0);
let b = +prompt('b?', 0);
function nuum(a, b) {
    return a * b;
}
console.log(nuum(a, b))
////////

function inputSomeValue() {
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
inputSomeValue();
////
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  
  console.log(getRandomInt(32));