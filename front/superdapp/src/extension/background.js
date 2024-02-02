/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let screen;
chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    if (request === 'super_connect') {
      chrome.windows.create({
        type: 'popup',
        url: `index.html?action=${JSON.stringify({action: 'super_connect'})}`,
        width: 420,
        height: 650
      });
    //   sendResponse({farewell: "goodbye"});
    }
    if (request instanceof Object) {
        if(request.action == 'super_transaction') {
            chrome.windows.create({
                type: 'popup',
                url: `index.html?action=${JSON.stringify(request)}`,
                width: 420,
                height: 650
              });
        }
        if (request.action == 'super_transaction_response') {
            const signatureFromContentScript = request.signature;
            // Определение идентификатора вкладки, в которой было отправлено сообщение
            const tabId = sender.tab.id;
            // Отправка сигнатуры обратно в содержимое
            chrome.tabs.sendMessage(tabId, { action: 'super_transaction_response', signature: signatureFromContentScript });
        }
    }
});

setInterval(() => {
    const lscreen = localStorage.screen;
    const parsedlscreen = JSON.parse(lscreen);
    if(parsedlscreen.current == 'lock') {
        return;
    } else {
        screen = {
            current: 'lock',
        };
        localStorage.screen = JSON.stringify(screen)
        window.location.reload();
    }
}, 1800000);
