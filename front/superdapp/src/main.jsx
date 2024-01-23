import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/scss/main.scss";
let screen;

if(localStorage.screen) {
    screen = JSON.parse(localStorage.screen);
    if(screen.current > 5) {
        screen.current = 5;
    }
} else {
    screen = {
        current: 1,
    };
    localStorage.screen = JSON.stringify(screen)
}

// // Устанавливаем экран на какой хотим
// screen.current = 5;
// localStorage.screen = JSON.stringify(screen);


const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
      <App />
);

// setInterval(() => {
//     const lscreen = localStorage.screen;
//     const parsedlscreen = JSON.parse(lscreen);
//     if(parsedlscreen.current == 'lock') {
//         return;
//     } else {
//         screen = {
//             current: 'lock',
//         };
//         localStorage.screen = JSON.stringify(screen)
//         window.location.reload();
//     }
// }, 5000);

export default screen;