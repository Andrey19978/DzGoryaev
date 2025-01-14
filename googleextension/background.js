chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'executeScript') {
      chrome.scripting.executeScript({
        target: { tabId: request.tabId },
        function: eval(request.func),
      }, function(result) {
        sendResponse(result);
      });
      return true; // Указываем, что ответ будет отправлен асинхронно
    }
  });