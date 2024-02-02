import screen from '../main';
import ReactDOM from 'react-dom/client'
import App from "../App";
const root = document.getElementById('root')
const ratat = ReactDOM.createRoot(root)

export default async function load(id) {
    screen.current = id;
    localStorage.screen = JSON.stringify(screen);
    ratat.render(
          <App />
    );
}
