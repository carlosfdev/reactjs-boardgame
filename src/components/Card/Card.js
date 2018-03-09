import React from 'react';
import './Card.css';

const Card = ({ character, onHitCard, isHisTurn, ...props }) => (
    <div className="Card">
        <h3>{character.name}</h3>
        <p>{character.race}</p>
        <p>Health {character.health}</p>
        <p>Power {character.power}</p>
        <button onClick={onHitCard} disabled={isHisTurn} className="button">Hit Card</button>
    </div>
);

export default Card;