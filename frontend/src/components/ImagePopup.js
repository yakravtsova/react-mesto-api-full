import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_feature_view ${card && 'popup_opened'}`}>
      <div className="popup__view-container">
        <button className="popup__close-button popup__close-button_feature_view" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <figure className="popup__image-container">
          <img className="popup__view-image" src={card?.link} alt={card?.name} />
          <figcaption className="popup__image-caption">{card?.name}</figcaption>
        </figure>
        </div>     
      </div>
  )
}

export default ImagePopup;