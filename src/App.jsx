import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { cardsDatas } from './assets/cards_datas';
import SingleCard from './components/SingleCard';

const cardImages = [...cardsDatas];
function App() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuid() }));
    setFirstCard(() => null);
    setSecondCard(() => null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoices = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCards((pre) => {
          return pre.map((card) => {
            if (card.src === firstCard.src) {
              return { ...card, matched: true };
            } else {
              return { ...card };
            }
          });
        });
        resetTurn();
      } else {
        console.log("Cards don't match");
        setTimeout(() => resetTurn(), 1500);
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(() => null);
    setSecondCard(() => null);
    setTurns((pre) => pre + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App'>
      <button onClick={shuffleCards}>New Game !</button>
      <p>Turn N°{turns}</p>
      <div className='game-board card-grid'>
        {cards.map((card, index) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoices={handleChoices}
            flipped={card === firstCard || card === secondCard || card.matched}
            disabled={disabled}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
