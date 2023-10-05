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
  multiplyNumeric(menu)
  console.log(menu)

    //пузырьковая сортировка
    let array2 = [2,6,8,3,7,9,4,77,44,33]
    array2.sort((a,b) => a-b)
    console.log(array2)
    
/////////////
    let users = [
      {id: 1, name: "Вася"},
      {id: 2, name: "Петя"},
      {id: 3, name: "Маша"}
    ];
    
    let user = users.find(item => item.id == 1);
    
    alert(user.name); 