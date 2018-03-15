import React from 'react';
import './Card.css';

const Card = ({ character, onHitCard, isHisTurn, onGetPower, isSelected, hasAnyCardBeenSelected, ...props }) => (
    <div className={`Card ${isSelected && 'Card--selected'}`}>
        <h3>{character.name}</h3>
        <p>{character.race}</p>
        <p>Health {character.health}</p>
        <p>Power {character.power}</p>
        {
                isHisTurn
                ? <button onClick={onGetPower} className="button button--currentTurn">Pick Hitter</button>
                : <button onClick={onHitCard} disabled={!hasAnyCardBeenSelected} className="button">Hit Card</button>
        }
    </div>
);

export default Card;