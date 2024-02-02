/* eslint-disable no-undef */
// content.js
'use strict';
async function injectScript(file_path) {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  document.documentElement.appendChild(script);
  localStorage.superId = chrome.runtime.id
}
async function start() {
  await injectScript(chrome.runtime.getURL('/src/scripts/injectScript.js')); 
}
start();
