//1
let styles = ["Джаз", "Блюз"]; 
styles.push("Рок-н-ролл"); 
styles[Math.floor((styles.length - 1) / 2)] = "Классика"; 
console.log(styles.shift()); 
styles.unshift("Рэп", "Регги")
console.log(styles)
//2
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введитечисло", 0);
        if (value === "" || value === null || !isFinite(value)) 
            break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumInput());
//3
function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}
console.log(getMaxSubSum([-2, 7, 3, 3, -3,]));