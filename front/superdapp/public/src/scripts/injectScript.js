/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
window.super = {
  isInjected: true,
  isConnected: false,
}
window.super = new Proxy(window.super || {}, {
  set: function(target, prop, value) {
    // Перехватываем изменение свойства
    target[prop] = value;

    // Проверяем, изменено ли свойство isConnected
    if (prop === 'isConnected' && value === true) {
      // Вызываем функцию call('super_connect')
      window.super.call('super_connect');
    }

    return true;
  }
});

// Функция, которую вы хотите вызывать из веб-страницы
window.super.call = function (action) {
  if (action === 'super_connect') {
      chrome.runtime.sendMessage(localStorage.superId, 'super_connect');
  }
  if (action instanceof Object) {
      chrome.runtime.sendMessage(localStorage.superId, { action: action.request, token: action.token, amount: action.amount, address: action.address });
  }
};