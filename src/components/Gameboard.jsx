import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  cardsDatas,
  duplicateArray,
  shuffleArray,
} from "../assets/cards_datas";
import Card from "./SingleCard";

let cardsArray = duplicateArray(cardsDatas);
export default function Gameboard() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  if (cards.length === 0) {
    setCards(() => {
      return [...cardsArray];
    });
  }
  const handleClick = (card) => {
    console.log(card);
  };

  return (
    <div id='game-board'>
      {cards.map((card, index) => {
        return (
          <Card
            key={uuid()}
            cardUrl={card}
            index={index}
            flippedCards={flippedCards}
            setFlippedCards={setFlippedCards}
            handleClick={handleClick}
          >
            {card}
          </Card>
        );
      })}
    </div>
  );
}
