// 1. Создайте функцию, которая выводит сообщение в консоль через 3 секунды 
// с использованием setTimeout.
function textOutput() {
  console.log('Привет')
}

setTimeout(textOutput, 3000);

// 2. Напишите программу, которая выводит числа от 1 до 10 в консоль с 
// //интервалом в 1 секунду, используя setInterval.
function intUser(a, b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

intUser(1, 10);
// //3. Создайте счетчик, который начинает с 1 и увеличивается каждую секунду, 
// //выводя его значение в консоль с использованием setInterval. 
// ///Остановите счетчик после достижения определенного значения.
let maxValue = 10;
let counter = 1;
let interval = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter >= maxValue) {
    clearInterval(interval);
  }
}, 1000);
// //4. Реализуйте функцию, которая выполняет определенную задачу через 
// //определенное количество секунд, переданное как аргументы, с 
// //использованием setTimeout.
function doTaskAfterDelay(task, delayInSeconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(task());
    }, delayInSeconds * 1000);
  });
}

const task = () => console.log('Задача выполнена!');
const delayInSeconds = 5;

doTaskAfterDelay(task, delayInSeconds).then(() => {
  console.log('Время выполнения задачи прошло.');
});
// //5. Напишите скрипт, который создает анимацию изменения цвета фона 
// страницы, меняя цвет каждую секунду с использованием setInterval. 
// *document.body.style.backgroundColor*
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 1000);

// //6. Создайте таймер обратного отсчета, который выводит оставшееся время в формате "ММ:СС" с использованием setInterval.
// Используеме переменные
let countdown;
let minutes;
let seconds;
// Функция обратного отсчета
function startCountdown(time) {
  countdown = setInterval(() => {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    // Приводим к 2значным формату
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    console.log(minutes + ':' + seconds);

    // Уменьшаем время на 1 секунду
    time--;

    // Останавливаем интервал, когда время истечет
    if (time < 0) {
      clearInterval(countdown);
      console.log('Время истекло!');
    }
  }, 1000);
}
// Запуск таймера на 10 минут
startCountdown(600);

// 7. Напишите функцию, которая будет выполнять определенную задачу каждые 
// 2 секунды с использованием setInterval, но остановится после 10 повторений.
let count = 0;

const myFunction = () => {
  console.log('Hello World');
  count++;

  if (count === 10) {
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(myFunction, 2000);
// 8. Разработайте игру "Камень, ножницы, бумага" между пользователем и 
// компьютером, где компьютер делает ход каждые 5 секунд после хода 
// пользователя с использованием setInterval.
// Взаимодействие с пользователем
function userPlay(choice) {
  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    console.log('Некорректный ввод! Введите "камень", "ножницы" или "бумага".');
    return;
  }
  console.log('Вы выбрали: ' + choice);
  playGame(choice, computerPlay());
}

// Выбор компьютера
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Логика игры
function playGame(userChoice, computerChoice) {
  console.log('Компьютер выбрал: ' + computerChoice);

  if (userChoice === computerChoice) {
    console.log('Ничья!');
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('Пользователь побеждает!');
  } else {
    console.log('Компьютер побеждает!');
  }
}

// Функция, имитирующая поведение компьютера
function computerPlaying() {
  setInterval(() => {
    userPlay(computerPlay());
  }, 5000);
}

computerPlaying();
// 9. Создайте слайд-шоу изображений, которое автоматически переключается на 
// следующее изображение каждые 5 секунд с использованием setInterval. 
// *document.body.style.backgroundImage*
let currentImageIndex = 0;
let images = [
  "url('image1.jpg')",
  "url('image2.jpg')",
  "url('image3.jpg')",
  "url('image4.jpg')",
  "url('image5.jpg')"
];

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.body.style.backgroundImage = images[currentImageIndex];
}

setInterval(changeBackgroundImage, 5000);
// 10. Напишите функцию, которая анимирует появление элемента на странице с 
// плавным появлением через определенное количество секунд, используя setTimeout.
function animateElementAppearance(elementId, durationInSeconds) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error('Element with the specified ID was not found.');
    return;
  }

  if (durationInSeconds <= 0) {
    console.error('Duration should be greater than 0 seconds.');
    return;
  }

  element.style.opacity = '0';
  element.style.display = 'block';

  const stepDurationInMilliseconds = 10;
  const stepsCount = durationInSeconds * 1000 / stepDurationInMilliseconds;

  let currentStep = 0;

  const animationStep = () => {
    currentStep++;
    element.style.opacity = currentStep / stepsCount;

    if (currentStep < stepsCount) {
      setTimeout(animationStep, stepDurationInMilliseconds);
    }
  };

  setTimeout(animationStep, stepDurationInMilliseconds);
}