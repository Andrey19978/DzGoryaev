const output = document.querySelector('.output')



function FuncPromise() {
  output.innerHTML = `
    <h5>1.Promise (Обещание):</h5><br>
       Promise - это объект, представляющий асинхронную операцию, 
       которая может завершиться успешно (resolve) или с ошибкой 
       (reject). Промисы позволяют более четко и удобно управлять асинхронным кодом.
     
       Пример создания промиса:<br><br>
    <pre>
    const myPromise = new Promise((resolve, reject) => {
      if (/* условие */) {
        resolve('Успех!'); // В случае успешного выполнения
      } else {
        reject('Ошибка!'); // В случае ошибки
        }
    })
    </pre><br>
    <h5>2. async и await:</h5><br>
       async и await - это синтаксический сахар для работы с промисами, 
       который делает асинхронный код более читаемым и удобным.
    
       Пример использования async и await:<br><br>
    <pre>
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
    </pre><br>
    <h5>3. Практические примеры:</h5><br>
    
       Пример 1: Загрузка данных с сервера с использованием async/await:
    <br><br><pre>
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка:', error);
        }
    }
    </pre><br>
       Пример 2: Параллельное выполнение нескольких асинхронных операций с Promise.all:
    <br><br><pre>
    async function fetchMultipleData() {
      const promises = [fetchData1(), fetchData2(), fetchData3()];
      const data = await Promise.all(promises);
      return data;
    }
    </pre><br>
       Пример 3: Цепочка обработки данных с промисами:
    <br><br><pre>
    fetch(url)
      .then(data => data.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
    </pre>
    `
}

function FuncClass() {
  output.innerHTML = `
    <h5> Классы:</h5><br>
    <p>Классы - это шаблоны для создания объектов.
    `
}

function FuncCallB() {

}

function FuncArr() {

};

function FuncMapSet() {
  output.innerHTML = `
            Map
  <br><br><pre>
  Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
  Методы и свойства:
  new Map() – создаёт коллекцию.
  map.set(key, value) – записывает по ключу key значение value.
  map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
  map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
  map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
  map.clear() – очищает коллекцию от всех элементов.
  map.size – возвращает текущее количество элементов.
  <br><br><pre>
  Например:

let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"

alert(map.size); // 3
  `
};


