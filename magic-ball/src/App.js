import logo from './logo.svg';
import './App.css';
import MagicBall from'./components/MagicBall/MagicBall';
import { Button} from '@mui/material';

function App() {
    let answers = [
      "Бесспорно",
      "Мне кажется - <да>",
      "Пока не ясно, попробуй снова",
      "Даже не думай",
    ]
let [number, setNumber] = userState(Math.floor(Math.random() * answers.length))
const handleClick = () => {
  setNumber(Math.floor(Math.random() * answers.length))
} 

  return (
    <div className="App">
      <header className="App-header">
      <MagicBall answer={ answers[Math.floor(Math.random() * answers.length)]} />
      <Button onClick={handleClick}>Получить</Button>
      </header>
    </div>
  );
}

export default App;
