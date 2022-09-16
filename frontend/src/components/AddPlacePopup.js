import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link,setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handlePlaceNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
  }

  return(
    <PopupWithForm name="add" title="Новое место" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Создать">
      <input type="text" className="popup__form-input popup__form-input_input_place" id="place-input" name="name" value={name} onChange={handlePlaceNameChange}
        placeholder="Название" minLength="2" maxLength="30" required/>
      <span className="popup__input-error place-input-error"></span>
      <input type="url" className="popup__form-input popup__form-input_input_image-link" id="link-input" name="link" value={link} onChange={handleLinkChange}
        placeholder="Ссылка на картинку" required/>
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;