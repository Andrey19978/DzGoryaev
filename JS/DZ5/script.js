// задание 1
let input, random = Math.ceil(Math.random() * 100);
while (input = prompt("Введите число от 1 до 100:")) {
  if (isNaN(input))
    alert("Введите число!");
  else if (input > random)
    alert("Меньше!");
  else if (input < random)
    alert("Больше!");
  else if (input == random) {
    alert("Правильно!");
    break;
  }
}
 // задание 2
 for (let i = 1; i <= 10; i++) {
  for (let p = 1; p <= 10; p++) {
      let nen = i + ' x ' + p + ' = ' + i * p;
      console.log(nen);
  }
}
 // задание 3
 let total = 0;
let input;
 
do {
  input = +prompt('Введи число');
 
  if (isFinite(input)) {
    total += input;
    console.log(total);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== 0);
alert(`Общая сумма чисел равна ${total}`);
 // задание 4

 // задание 5