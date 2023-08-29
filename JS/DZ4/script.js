//1 задание
    let tad = Number(prompt('Указывает объем флешки в Гб'));
    let nap2 = Number ((`${tad}`*1000/820)); //влезет на флешку
    alert(Math.floor(`${nap2}`));
//2 задание
let ped1 = Number(prompt('Укажите сколько денег в кошельке'));
let ped2 = Number(prompt('Указывает ценну шоколадка'));
let ped3 = ped1/ped2;
alert(Math.floor(`${ped3}`));
//3 задание
let nem = Number(prompt('Указывает трехзначное число'));
alert(('' + nem).split('').reverse().join(''));
//4 задание
let telC = Number(prompt('Вашь возраст?'));
let compREsu = (telC < 2) ? 'Вы ребенок' : (telC > 12 && telC < 18) ? 'Вы подросток' : (telC > 18 && telC < 60) ? 'Вы взрослый' : 'Вы пенсионер';
alert(compREsu);
//5 задание
let telm = Number(prompt('Вашь возраст?'));

switch (telm) {
  case 1:
    alert( '!' );
    break;
  case 2:
    alert( '@' );
    break;
  case 3:
    alert( '#' );
    break;
    case 4:
    alert( '$' );
    break;
    case 5:
    alert( '%' );
    break;
    case 6:
    alert( '^' );
    break;
    case 7:
    alert( '&' );
    break;
    case 8:
    alert( '*' );
    break;
    case 9:
    alert( '(' );
    break;
  default:
    alert( "Нет таких значений" );
}
//6 задание
let str = prompt ('Введите трёхзначное число');
let text = 'Повторяющихся цифр в числе нет';
for (var j = 0; j < str.length; j++)
   {
   if (str.split (str [j]).length > 2) {text = 'В числе имеются повторяющиеся цифры'; break;}
   }
alert (text);
//7 задание
let year = prompt ('Введите ваш год рождения');
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('Високосный');
} else {
    console.log('Не високосный');
}
//8 задание
(function ()
    {
    let str = prompt ('Введите любое натуральное число', ''); // prompt возвращает данные типа String, и в этом вся фишка
    if (isNaN (str)) {alert ('Вы ввели не число'); return}
    if (parseInt (str) != str || str <= 0) {alert ('Вы ввели не натуральное число'); return}
 
    let j = 0, le = str.length - 1, pal = true;
    while (j <= le - j) { pal = pal && (str.charAt (j) == str.charAt (le - j)); j++}
    alert ('Введённое число ' + str + (pal ? ' ' : ' не ') + 'является палиндромом');
    })();