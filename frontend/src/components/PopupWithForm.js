import React from 'react';

function PopupWithForm({ name, title, children, isOpen, onClose, buttonText, onSubmit }) {
  return (
    <div className={`popup popup_feature_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className={`popup__close-button popup__close-button_${name}`} type="button" aria-label="Закрыть" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form popup__form_feature_${name}`} name={`${name}-form`} onSubmit={onSubmit} autoComplete="off">
          {children}
          <input type="submit" className={`popup__form-button popup__${name}-button`} value={buttonText}/>
        </form>        
      </div>     
    </div>
  )
}

export default PopupWithForm;