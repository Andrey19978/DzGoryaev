const grabBtns = document.querySelectorAll('.grab-btn'); //Привязываем кнопку сбора
const stopBtn = document.getElementById("StopBtn");//Привязываем кнопку стоп
let timeoutId = null;//Сбрасываем тайм аут "стоп"

grabBtns.forEach((btn) => { //Метод массива forEach() позволяет применить колбэк-функцию ко всем элементам массива
  btn.addEventListener('click', async () => { //.addEventListener Добавляет элементу действие, которое будет выполнено после срабатывания события. Например, на клик мышки или нажатие клавиши.//Объявление async function определяет асинхронную функцию, которая возвращает объект AsyncFunction.
    const id = btn.getAttribute('data-id');//Метод getAttribute() интерфейса Element возвращает значение указанного атрибута.
    if (id === '1') {//Определяет айди 1
      await chrome.storage.local.set({ abort: false });//Объект Set позволяет хранить уникальные значения любого типа, будь то примитивы или ссылки на объекты.
      const tab = await getActiveTab();//Функциональность управления вкладками на стороне клиента позволяет программно получать доступ к объектам вкладок на стороне клиента. Активную вкладку можно получить на стороне клиента с помощью метода GetActiveTab .
      chrome.scripting.executeScript({//Вставляет скрипт в целевой контекст. Скрипт запускается document_idleпо умолчанию.
        target: { tabId: tab.id },
        function: collectGameBoardData
      });
    } else if (id === '2') {//Определяет айди 2

      await chrome.storage.local.set({ abort: false });//Метод abort() интерфейса AbortController прерывает DOM запрос (например Fetch запрос) до его завершения. Это позволяет прервать fetch запросы, использование любого ответа Body и потоков.
      const tab = await getActiveTab();//Функциональность управления вкладками на стороне клиента позволяет программно получать доступ к объектам вкладок на стороне клиента. Активную вкладку можно получить на стороне клиента с помощью метода GetActiveTab .
      chrome.scripting.executeScript({//Вставляет скрипт в целевой контекст. Скрипт запускается document_idleпо умолчанию.
        target: { tabId: tab.id },//Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. Он отличается от Event.currentTarget, если обработчик события вызывается во время всплытия (bubbling) или захвата события.
        function: collectGameBoardDataDrev
      });
    } else if (id === '3') {//Определяет айди 3

      await chrome.storage.local.set({ abort: false });//Метод abort() интерфейса AbortController прерывает DOM запрос (например Fetch запрос) до его завершения. Это позволяет прервать fetch запросы, использование любого ответа Body и потоков.
      const tab = await getActiveTab();//Функциональность управления вкладками на стороне клиента позволяет программно получать доступ к объектам вкладок на стороне клиента. Активную вкладку можно получить на стороне клиента с помощью метода GetActiveTab .
      chrome.scripting.executeScript({//Вставляет скрипт в целевой контекст. Скрипт запускается document_idleпо умолчанию.
        target: { tabId: tab.id },//Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. Он отличается от Event.currentTarget, если обработчик события вызывается во время всплытия (bubbling) или захвата события.
        function: collectGameBoardDataSemy
      });
    }
  });
});

async function getActiveTab() {//Функциональность управления вкладками на стороне клиента позволяет программно получать доступ к объектам вкладок на стороне клиента. Активную вкладку можно получить на стороне клиента с помощью метода GetActiveTab .
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

function collectGameBoardDataSemy() {
  chrome.storage.local.get("abort", (result) => {
    if (result.abort) return;

    const imageSelectors = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Массив букв
    const numberRange = Array.from({ length: 41 }, (_, i) => i + 1); // Массив чисел от 1 до 41

    // Собираем элементы с игрового поля по буквам
    for (let letter of alphabet) {
      for (let il of numberRange) {
        const selector = `#headlessui-dialog-panel-\\:r${letter}\\: > div > div.relative.max-h-\\[90vh\\].overflow-y-auto.overflow-x-hidden.scrollable.bg-\\[\\#c28569\\] > div:nth-child(2) > div > div.w-full.sm\\:w-3\\/5.h-fit.sm\\:max-h-96.p-1.flex.max-h-56.flex-wrap.overflow-y-auto.scrollable.overflow-x-hidden.sm\\:mr-1.mt-1.sm\\:mt-0 > div > div:nth-child(4) > div:nth-child(${il}) > div > div.absolute.flex.justify-center.items-center.w-full.h-full > div > img`;

        const element = document.querySelector(selector);
        if (element) {
          imageSelectors.push(element);
        }
      }
    }

    // Собираем элементы с игрового поля по цифрам
    for (let il of numberRange) {
      const selector = `#headlessui-dialog-panel-\\:r${il}\\: > div > div.relative.max-h-\\[90vh\\].overflow-y-auto.overflow-x-hidden.scrollable.bg-\\[\\#c28569\\] > div:nth-child(2) > div > div.w-full.sm\\:w-3\\/5.h-fit.sm\\:max-h-96.p-1.flex.max-h-56.flex-wrap.overflow-y-auto.scrollable.overflow-x-hidden.sm\\:mr-1.mt-1.sm\\:mt-0 > div > div:nth-child(4) > div:nth-child(${il}) > div > div.absolute.flex.justify-center.items-center.w-full.h-full > div > img`;

      const element = document.querySelector(selector);
      if (element) {
        imageSelectors.push(element);
      }
    }

    console.log(`Найдено элементов: ${imageSelectors.length}`); // Логируем количество найденных элементов

    // Рекурсивная функция для обработки изображений
    function processImageElements(index) {
      if (index >= imageSelectors.length) return;

      const imgElement = imageSelectors[index];
      if (imgElement) {
        imgElement.click(); // Или любое другое действие, которое вы хотите выполнить
      }

      setTimeout(() => {
        processImageElements(index + 1);
      }, 2000); // Задержка 2 секунды
    }

    // Начинаем обработку изображений
    processImageElements(0);

    // Установка таймаута для повторного вызова функции
    if (!result.abort) {
      setTimeout(collectGameBoardDataSemy, 5000);
    }
  });
}

function collectGameBoardData() {
  chrome.storage.local.get("abort", (result) => {
    if (result.abort) return;

    const elements = [];

    // Собираем элементы с игрового поля
    for (let i = 46; i <= 149; i++) {
      const selector = `#game-board > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(${i}) > div > div > div`;
      elements.push(document.querySelector(selector));
    }

    // Обрабатываем элементы игрового поля
    elements.forEach((element) => {
      if (element) {
        for (let i = 0; i < 3; i++) {
          element.click();
        }
      }
    });
    ///nachalo
    // Запускаем функцию снова через 5 секунд, если не было прерывания
    if (!result.abort) {
      timeoutId = setTimeout(collectGameBoardData, 5000);
    }
  });
}

function collectGameBoardDataDrev() {
  chrome.storage.local.get("abort", (result) => {
    if (result.abort) return;

    const elements1 = [];
    for (let ic = 110; ic <= 160; ic++) {
      const selector1 = `#game-board > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(${ic}) > div > div > div > div`;
      elements1.push(document.querySelector(selector1));
    }

    elements1.forEach((element1) => {
      if (element1) {
        for (let i = 0; i < 3; i++) {
          element1.click();
        }
      }
    });

    if (!result.abort) {
      timeoutId = setTimeout(collectGameBoardDataDrev, 5000);
    }
  });
}
stopBtn.addEventListener("click", async () => {
  await chrome.storage.local.set({ abort: true });
  clearTimeout(timeoutId);
  timeoutId = null;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
        chrome.storage.local.get("abort", (result) => {
          if (result.abort) {
            // код для остановки выполнения
          }
        });
      }
    });
  });
});