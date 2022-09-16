import React from 'react';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
       <section className="profile">
          <div className="profile__avatar-wrap">
            {currentUser.avatar && (<img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя"/> )}
            <button className="profile__edit-avatar" type="button" aria-label="Обновить аватар" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>  
        </section>
        <section className="elements">
          <ul className="elements__list">
            {cards.map((item, i) => (
              <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} /> 
            ))}
          </ul>
        </section>
      </main>
  )
}

export default Main;