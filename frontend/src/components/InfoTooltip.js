import React from 'react';
import okIcon from '../images/popup-reg-ok.svg';
import errIcon from '../images/popup-reg-err.svg';

function InfoTooltip({ isOpen, isSuccess, successMessage, errorMessage, onClose }) {


  return(
    <div className={`popup ${isOpen && 'popup_opened'}`}>
        <div className="popup__container popup__container_feature_info">
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
          <img src={isSuccess ? okIcon : errIcon} alt={isSuccess ? "Успешно" : "Ошибка"} />
          <h2 className="popup__title popup__title_feature_info">{isSuccess ? successMessage : errorMessage}</h2>
        </div>
      </div>
  )
}

export default InfoTooltip;