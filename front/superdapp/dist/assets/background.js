let t;chrome.runtime.onMessageExternal.addListener(function(e,n,s){if(e==="super_connect"&&chrome.windows.create({type:"popup",url:`index.html?action=${JSON.stringify({action:"super_connect"})}`,width:420,height:650}),e instanceof Object&&(e.action=="super_transaction"&&chrome.windows.create({type:"popup",url:`index.html?action=${JSON.stringify(e)}`,width:420,height:650}),e.action=="super_transaction_response")){const r=e.signature,o=n.tab.id;chrome.tabs.sendMessage(o,{action:"super_transaction_response",signature:r})}});setInterval(()=>{const e=localStorage.screen;JSON.parse(e).current!="lock"&&(t={current:"lock"},localStorage.screen=JSON.stringify(t),window.location.reload())},18e5);