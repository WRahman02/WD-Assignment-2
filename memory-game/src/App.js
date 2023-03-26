import './App.css';
//import './singCard.js'
import {useState} from 'react'

const cardImg =[
  {"src": "/images/A.png"},
  {"src": "/images/B.png"},
  {"src": "/images/C.png"},
  {"src": "/images/D.png"},
  {"src": "/images/E.png"},
  {"src": "/images/F.png"}
]

function App() {
  const [cards, set] = useState([])
  const [turns, setTurns] = useState(0)
  //shuffle
  const shuffleCard = () => {
    const shuffledCards = [...cardImg,...cardImg]
      .sort(() => Math.random() -.5)
      .map((card) => ({...card, id: Math.random()}))
    set(shuffledCards)
    setTurns(0);
  }

  console.log(cards, turns)
  return (
    <div className="App">
      <h1> Memory Game </h1>
      <button onClick={shuffleCard}>New Game</button>
      
      <div className='grid'>
        {cards.map(card => (
          <div>
            <img className='face' src={card.src} alt = 'face'/>
            <img className='back' src='/images/back.png' alt = 'back'/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
