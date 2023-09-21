const person1 = {
    name1: "John",
    armor1: "Посох",
    HP1: 100,
    attack1: 23,
    defense1: 13,
};
const person2 = {
    name2: "John",
    armor2: "Посох",
    HP2: 100,
    attack2: 23,
    defense2: 13,
};


do {
   
  } while ();





  function Person1(name, armor, heal, attack, defense) {
    this.name = name,
    this.armor = armor,
    this.heal = heal,
    this.attack = attack,
    this.defense = defense
  }
let var1 = new Person1("Jack", "P", 100, 31, 3);
let var2 = new Person1("John", "A", 100, 19, 5);

function duel(var1, var2){
    while ( var1.heal > 0 && var2.heal > 0){
        var1.heal -= (var2.attack - var1.defense)
        var2.heal -= (var1.attack - var2.defense)
        console.log(`${var1.heal}`)
        console.log(`${var2.heal}`)
    }
    if(var1.heal <= 0 || var2.heal <= 0){
        let result = var1.heal <= 0 ? var1.name : var2.heal <= 0 ? var2.name : "никто не умер";
        console.log(result + ' Проиграл')
    }
}
duel(var1, var2)