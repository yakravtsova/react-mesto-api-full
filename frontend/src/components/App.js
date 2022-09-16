import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import InfoTooltip from './InfoTooltip';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import * as auth from '../utils/auth';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); 
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [IsOk, setIsOk] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck();
  }, []);

 useEffect(() => {
    if (loggedIn) {
      api.getAllData()
      .then(allData => {
        const [userData, allCardsData] = allData;
        setCards(allCardsData);
        setCurrentUser(userData)
      })
      .catch(err => console.log(err));
    }
  }, [loggedIn]);

  function tokenCheck() {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      auth.getContent(token)
      .then(res => {
        if (res) {
          setEmail(res.email);
          handleLogin();
        }
      })
      .catch(err => console.log(err));
    }
  }

  function handleRegister(email, password) {
    auth.register(email, password)
      .then(res => {
        if (res) {
          setIsOk(true);
          handleTooltipOpen();  
        }
        else {
          setIsOk(false);
          handleTooltipOpen();
        }
        })
      .catch(err => {
        setIsOk(false);
        handleTooltipOpen();
      })
  }

  function handleAuthorization(email, password) {
    auth.authorize(email, password)
    .then(data => {
      if (data.token) {
        handleLogin();
        tokenCheck();
      }
      else {
        setIsOk(false);
        handleTooltipOpen()
      }
    })
    .catch(err => {
      setIsOk(false);
      handleTooltipOpen();
      console.log(err);
    })
  }

  function handleTooltipOpen() {
    setIsInfoTooltipOpen(!isInfoTooltipOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAvatarEditProfileClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPopupOpen(!isAddPopupOpen);
  }

  function closeAllPopups() {
    setIsAddPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(data) {
    api.editUserData(data)
    .then(userData => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(err => console.log(err))
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data)
    .then(avatar => {
      setCurrentUser(avatar);
      closeAllPopups();
    })
    .catch(err => console.log(err))
  }

  function handleTooltipClose() {
    setIsInfoTooltipOpen(false);
  }

  function handleCardLike(card) {
    console.log(`${currentUser._id} / ${card.likes}`);
    const isLiked = card.likes.some(i => i === currentUser._id);
    console.log(isLiked);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then(newCard => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(message => {
      setCards((state) => state.filter((c) => c._id !== card._id))
    })
    .catch(err => console.log(err))
  }

  function handleAddPlace(card) {
    api.addCard(card)
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(err => console.log(err))
  }

  function handleLogin() {
    setLoggedIn(true);
    navigate('/', { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header userEmail={email} />      
      <Routes>
        <Route
          path="/"            
          element={ 
            <ProtectedRoute loggedIn={loggedIn}>
              <Main 
                onEditAvatar={handleAvatarEditProfileClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete} />
              <Footer />
            </ProtectedRoute>}
          />
        <Route 
          path="/sign-up" 
          element={
            <Register 
              handleRegister={handleRegister} />} 
        />
        <Route 
          path="/sign-in" 
          element={
            <Login 
              handleAuthorization={handleAuthorization} 
            />} 
        />          
      </Routes>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <AddPlacePopup isOpen={isAddPopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>      
      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да"/>
      <PopupWithForm name="error" title="Что-то пошло не так" buttonText="Ладно"/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <InfoTooltip 
        isOpen={isInfoTooltipOpen}
        isSuccess={IsOk}
        successMessage="Вы успешно зарегистрировались!"
        errorMessage="Что-то пошло не так! Попробуйте ещё раз." 
        onClose={handleTooltipClose} />
    </CurrentUserContext.Provider>
  );
}

export default App;