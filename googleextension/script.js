const grabBtn = document.getElementById("grabBtn");
grabBtn.addEventListener("click", async () => {
    // получаем доступ к активной вкладке
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // выполняем скрипт
    chrome.scripting.executeScript({
        // скрипт будет выполняться во вкладке, которую нашли на предыдущем этапе
      target: { tabId: tab.id },
      // вызываем функцию
      function: grabBtnFall,
    });
  });
  //функция на сбор пасевов
  function grabBtnFall() {
    let abort = false;

    function abc()
    {
        if (abort) {
            return;
        }
    }
    setTimeout(function() {
        grabBtnFall = setTimeout(grabBtnFall, 5000);
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(90) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(86) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(87) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(88) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(89) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(91) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(87) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(92) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(77) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(74) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(75) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(60) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(62) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(64) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(65) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(78) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(73) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(71) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(79) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(66) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(67) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(59) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(57) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(56) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(49) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(48) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(68) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(69) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(58) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(94) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(93) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(76) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(80) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(81) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(70) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(61) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(51) > div > div > div").click();
        document.querySelector("#root > div > div > div.absolute.w-full.h-full.z-10 > div > div.absolute.left-1\\/2.top-1\\/2.-translate-x-1\\/2.-translate-y-1\\/2 > div > div:nth-child(50) > div > div > div").click();
    }, 1000);
  }
//кнопка стоп
