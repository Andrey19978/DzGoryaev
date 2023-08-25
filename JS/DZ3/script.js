//1 задание
let age = Number(prompt('Первое число'));
let result = "Доступ разрешен!"
let result1 = "Доступ запрещен!"
if (age >= 18) {
    alert(result);
} else {
    (age < 18)
    alert(result1);
}

//2 задание
let admin = String(prompt('Первое число'));
let resul = "Добро пожаловать администратор!"
let resul1 = "Доступ запрещен!"
if (admin === "adminn") {
    alert(resul);
} else {
    alert(resul1);
}
//3 задание
let num1 = Number(prompt('Первое число'));
let num2 = Number(prompt('Второе число'));
let oven0r00dd = (num1 % num2 == 0);
if (oven0r00dd) {
    alert("Четное");
} else {
    alert("не четное");
}
//4 задание
let telA = Number(prompt('число a'));
let telB = Number(prompt('число b'));
let compREsult = (telA > telB) ? 'Число a больше b' : (telA < telB) ? 'Число b больше а' : 'Число a равно b';
alert(compREsult);
//5 задание
let isStudent = prompt("Ты студент")
let hasJob = prompt("Ты работаешь")
let bothConditions = (isStudent && hasJob)
console.log(bothConditions);
//6 задание
let tad = Number(prompt('Введите ваш балл по экзамену'));
let compREsul = (tad >= 60) ? 'Вы сдали' : 'Вы не сдали';
alert(compREsul);
//7 задание
let telC = Number(prompt('число a'));
let compREsu = (telC < 18) ? 'Вы несовершеннолетний' : (telC <= 65) ? 'Вы взрослый' : 'Вы пожилой человек';
alert(compREsu);
//8 задание
let num4 = Number(prompt('Первое число'));
let num5 = Number(prompt('Второе число'));
let oven0r00d = (num4 % num5 == 0);
if (oven0r00d) {
    alert("Четное");
} else {
    alert("не четное");
}
//9 задание
let telS = prompt('Выберите напиток');
let compREsultD = (telS == "чай") ? 'Вы выбрали чай' : (telS == "кофе") ? 'Вы выбрали кофе' : (telS == "сок") ? 'Вы выбрали сок' : "нет такого";
alert(compREsultD);
//10 задание
let telM = Number(prompt('Введите расстояние'));
let compREsu1 = (telM < 5) ? 'Вы можете пройти пешком' : (telM <= 20) ? 'Вы можете взять велосипед' : 'Воспользуйтесь автобусом';
alert(compREsu1);
//11 задание
let telP = Number(prompt('введите число'));
let telK = Number(prompt('введите число'));
let compREsu2 = (telP < telK) ? 'Число ' + (`${telK}`) + ' больше числа ' + (`${telP}`) : (telP > telk) ? ' Число ' + (`${telP}`) + ' больше числа ' + (`${telK}`) : 'Не могу посчитать(';
alert(compREsu2);
//12 задание
let telY = Number(prompt('Введите число баллов по тесту'));
let compREsua = (telY >= 90) ? 'отлично' : (telY >= 70) ? 'хорошо' : 'удовлетворительно';
alert(compREsua);
//13 задание
let num4 = Number(prompt('Первое число'));
let num5 = Number(prompt('Второе число'));
let oven0r00d = (num4 % num5 == 0);
if (oven0r00d) {
    alert("Четное");
} else {
    alert("не четное");
}
//14 задание
let telZ = prompt('Выберите язык');
let compREsultR = (telZ == "Французский") ? 'Bonjour' : (telZ == "английский") ? 'Hello' : "нет такого";
alert(compREsultR);
//15 задание
let telna = prompt('Введите месяц');
let month = (telna == "декабрь" || telna == "январь" || telna == "февраль") ? "Зима" : (telna == "март" || telna == "апрель" || telna == "май") ? "весна" : (telna == "июнь" || telna == "июль" || telna == "август") ? "лето" : (telna == "декабрь" || telna == "январь" || telna == "февраль") ? "осень" : "нет такого";
alert(month);