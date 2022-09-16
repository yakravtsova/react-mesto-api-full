import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description
    })
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
      <input type="text" className="popup__form-input popup__form-input_input_username" id="username-input" name="name" value={name ? name : ''} onChange={handleNameChange}
      placeholder="Введите имя" minLength="2" maxLength="40" required/>
      <span className="popup__input-error username-input-error"></span>
      <input type="text" className="popup__form-input popup__form-input_input_about" id="about-input" name="about" value={description ? description : ''} onChange={handleDescriptionChange}
      placeholder="Расскажите о себе" minLength="2" maxLength="200" required/>
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>)
}

export default EditProfilePopup;