const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
//2
for (key in user) {
   return false;
  }
  return true;
//4
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    plo: 0,
}
    let sum = 0;
    for (let key in salaries) {
      sum += salaries[key];
    }
    
    console.log(sum);
//5
const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }