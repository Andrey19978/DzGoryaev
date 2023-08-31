let age = Number(prompt('введите возраст'));
function showMessage(agex) {
    if (agex <= 18) {
        alert( 'школьник' );
      } else {
        alert( 'студент' );
      }
}
showMessage(age);

let telA = Number(prompt('число a'));
let telB = Number(prompt('число b'));
function checkNumb(a,b){
    if (a > b) {
        return b;
    }else if(a < b){
        return a;
    };
}
console.log(checkNumb(telA, telB));