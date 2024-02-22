import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/scss/main.scss";
import load from './functions/loader.jsx';
import { addToAccount } from './systems/storage/store.js';
let screen;
// // Устанавливаем экран на какой хотим
// screen.current = 5;
// localStorage.screen = JSON.stringify(screen);

if(localStorage.screen) {
    screen = JSON.parse(localStorage.screen);
    if(screen.current == 'lock') {
        addToAccount('lock', true)
        load('lock');
    }
    if(screen.current > 5) {
        screen.current = 5;
    }
} else {
    screen = {
        current: 1,
    };
    localStorage.screen = JSON.stringify(screen)
}

async function start() {
        screen.current = 26;
    localStorage.screen = JSON.stringify(screen);
    const currentUrl = new URL(window.location.href);
    const searchParams = currentUrl.searchParams;
    const actionValue = searchParams.get('action');
    if(actionValue == null) {
        const root = document.getElementById('root')
        ReactDOM.createRoot(root).render(
            <App />
        );
        return;
    }
    const act = JSON.parse(actionValue)
    if(act.action == 'super_connect') {
        screen.current = 23;
        localStorage.screen = JSON.stringify(screen)
    }
    if(act.action == 'super_transaction') {
        screen.current = 22;
        localStorage.screen = JSON.stringify(screen);
    }
    const root = document.getElementById('root')
    await ReactDOM.createRoot(root).render(
        <App />
    );
}
start()
export default screen;