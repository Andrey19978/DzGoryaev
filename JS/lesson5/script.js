///1
let men = "Привет мир";
var men1 = 1;
///2
let men1Str = String(men1);
///3
let telC = Number(prompt('число a'));
let compREsu = (telC < 18) ? 'Школьник' : 'Студент';
alert(compREsu);
///4
let m = 0;
while (m <= 10) { 
    let i = Math.floor(Math.random(100)*100);
  console.log(i);
  m++;
}
///5
for (let m = 0; m <= 9; m++) {
    let i = Math.floor(Math.random(100)*100);
    console.log(i)
  }
///6
let tel0 = Number(prompt('Первое число'));
let tel1 = prompt('Введите оператор');
let tel2 = Number(prompt('Второе число'));

switch (tel1) {
  case "+":
    alert( tel0 + tel2 );
    break;
  case "-":
    alert( tel0 - tel2 );
    break;
  case "/":
    alert( tel0 / tel2 );
    break;
    case "*":
    alert( tel0 * tel2 );
    break;
  default:
    alert( "Нет таких значений" );
}

