import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarUrlRef = React.useRef();
  const [avatar, setAvatar] = React.useState('');

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarUrlRef.current.value
    });
  }

  return(
    <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
      <input type="url" className="popup__form-input popup__form-input_input_avatar" id="avatar-input" name="avatar" value={avatar} ref={avatarUrlRef} onChange={handleAvatarChange} placeholder="Ссылка на картинку" required/>
      <span className="popup__input-error avatar-input-error"></span>         
    </PopupWithForm>
  )
}

export default EditAvatarPopup;