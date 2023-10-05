let users = [
  {name: "Иван", age: "Иванов", city: 20, number: 20},
  {name: "Иван", age: "Иванов", city: 20, number: 20},
  {name: "Иван", age: "Иванов", city: 20, number: 20},
  ];


  function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let sity = document.getElementById("sity").value;
    let number = document.getElementById("number").value;
    let user = {name: name, age: age, sity: sity, number: number,};
    users.push(user);
    }
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].name + " " + users[i].surname + " - " + users[i].age);
    }
  
  
  
