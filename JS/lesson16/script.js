//1

let num = [1, 2, 5, 43, 13, 6]
 
let sum = 0;
 
for (let i = 0; i < num.length; i++) {
    sum += num[i];
}
console.log(sum)
//2
let num1 = [1, 2, 5, 43, 13, 6]
let maxValue = Math.max(...num1);
console.log( maxValue);
//3
let num3 = 6;
let lengths = ["Бильбо", "Гэндальф", "Назгул"].filter(item => item.length > num);

for (let i = 0; i < num3.length; i++) {
    
}
console.log(lengths);
//4
let animals = ['dog', 'cat', 'hamster', 'bird', 'fish'];

console.log( animals.indexOf( 'dog' ) != -1 );
//5
let sen = ["Олег", "Настя", "Артем"];
let ten = ["Слава", "Станислав", "Александер"];
let sop = sen.concat(ten);
console.log(sop);
//6. Удаление дубликатов: Создайте функцию, которая удаляет дубликаты из массива.
let arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10, 10];
let unique = arr.filter(function(elem, index, self) {
   return index === self.indexOf(elem);
})
console.log(unique)

//7. Сортировка массива: Реализуйте сортировку массива чисел по возрастанию и убыванию.

//8. Преобразование элементов массива: Напишите функцию, которая умножает каждый элемент числового массива на заданное число.

//9. Подсчет количества определенных элементов: Создайте функцию, которая подсчитывает количество определенных элементов в массиве.

//10. Обратный порядок элементов: Напишите функцию, которая изменяет порядок элементов в массиве на обратный.
