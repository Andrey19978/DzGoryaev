let users = [ ];
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let city = document.getElementById("city");
    let number = document.getElementById("number");
    let outputs = document.querySelector('.outputs')
    function user(){
        users.push({name: name.value, age: age.value, city: city.value, number: number.value});
        alert(`Данные о ${name.value} сохраненны`)
        document.getElementById("nnn").onclick = function() {
          document.getElementById("number").value = "";
          document.getElementById("name").value = "";
          document.getElementById("age").value = "";
          document.getElementById("city").value = "";
        }
    } ;
    function showUsersName(){
      outputs.value = ''
      let buff = ''
      users.forEach((e) => {
        buff += e.name + '<br>'
      })
      outputs.innerHTML = buff
    }
  
  
  
