№1
Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
№2
Дана строка. Выведите в консоль длину этой строки.
№3
Дана строка. Выведите в консоль последний символ строки.
№4
Дано число. Проверьте, четное оно или нет.
№5
Даны два слова. Проверьте, что первые буквы этих слов совпадают.
№6
Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

Math.sign(-1)
1////
let age = "Andrey"
console.log(age.length);
2////
let str = `Andrey`;
console.log(str[5]);
console.log(str.at(-1))
3////
function teen(number){
    return number % 2 === 0 ? "четное" : "не четное"
}
console.log(teen(2352))
console.log(teen(236235))
4////
let a = "Andrey"
let b = "Anay"
console.log(a[0] === b[0])
5////
function m(prov){
    if (prov[5] === "ь") {
       return prov[4]
      }
    }
    console.log(m("AAdrem"))
    console.log(m("Andreь"))
    console.log(m("Andreya"))
    console.log(m("Andrey"))
6////
№7
Дано число. Выведите в консоль первую цифру этого числа.
№8
Дано число. Выведите в консоль последнюю цифру этого числа.
№9
Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
№10
Дано число. Выведите количество цифр в этом числе.
№11
Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

7////
let number = 123456
console.log(String(number)[0])
8////

function NumberMap(){
    let number = 123456
    number = number % 10;
    console.log(number)
    }
NumberMap()


9////
function NumberMap(){
    let number = 123456
    number = number % 10;
    console.log(String(number)[0] + number)
    }
    NumberMap()
10////
let number = 123456
console.log(number.length)
11////
let number1 = 123456
let number2 = 123456
console.log(number1[0] === number2[0])
12////