function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }


let target = 'namber'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;}
  console.log(`${foundPos}`)



  let styles = ["Джаз", "Блюз", ];
styles.push("Рок-н-ролл");
let middl = styles.splice((styles.length / 2), 1)[0]
// middl.shift( "Классика")

console.log(styles)