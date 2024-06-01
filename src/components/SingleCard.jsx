import './SingleCard.css';
import { React, useState } from 'react';

export default function SingleCard({
  card,
  handleChoices,
  index,
  flipped,
  disabled,
}) {
  const handleClick = () => {
    !disabled && handleChoices(card);
  };
  return (
    <div className='card'>
      <div className={flipped ? 'flipped flip' : null}>
        <img className='front' src={card.src} alt='card-front' />
        <img
          role='button'
          tabIndex={index}
          className='back'
          src='/cards/bg_cards.svg'
          alt='card-front'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
