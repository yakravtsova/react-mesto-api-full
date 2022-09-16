import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = `element__remove-button ${!isOwn && 'element__remove-button_passive'}`;
  const isLiked = card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${isLiked && 'element__like-button_active'}`
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <div className="element__square-box">
        <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" aria-label="Удалить"></button>
        <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      </div>
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-box">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="Нравится"></button>
          <p className="element__likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;