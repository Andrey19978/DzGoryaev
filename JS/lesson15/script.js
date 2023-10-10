let users = [ ];
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let number = document.getElementById("number").value;
    function user(name, age, city, number){
        users.push({name: name, age: age, city: city, number: number,});
        alert("Данные сохранены")
        document.getElementById("nnn").onclick = function() {
          document.getElementById("number").value = "";
          document.getElementById("name").value = "";
          document.getElementById("age").value = "";
          document.getElementById("city").value = "";
        }
    } ;
  
  
  
