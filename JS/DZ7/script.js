//1
function even_or_odd(number) {
    return number % 2 === 0 ? "Четное" : "Не четное";
}

console.log(even_or_odd(3));
console.log(even_or_odd(2));
//стрелочная функция
let sum = (number) => number % 2 === 0 ? "Четное" : "Не четное";
alert( sum(2) );
//2
function net(x,t){
    let y= x*t;
    if (y >= 10) {
        let k = y / 100 * 10;
        let s = y - k;
      alert(`${s}`);
    } else if (y <= 10){
      alert (`${y}`) ; 
    }
    return y;
}
alert( net(3, 4) );
//3

let telC = Number(prompt('Вашь балл по тесту'));

function ball(telC){
    let compREsu = (telC < 20) ? 'А' : (telC > 20 && telC < 40) ? 'Б' : (telC > 40 && telC < 60) ? 'С' : 'Д';
    return compREsu;
} 
console.log(ball(telC));
//4
//5
function net(y){
    let k = y / 100 * 14;
    return k;
}
alert( net(60000) );
//6
let telna = prompt('Введите месяц');
function monthF(telna){
    let month = (telna == "декабрь" || telna == "январь" || telna == "февраль") ? "Зима" : (telna == "март" || telna == "апрель" || telna == "май") ? "весна" : (telna == "июнь" || telna == "июль" || telna == "август") ? "лето" : (telna == "декабрь" || telna == "январь" || telna == "февраль") ? "осень" : "нет такого";
    alert(month);
    return month;
}
monthF(telna);