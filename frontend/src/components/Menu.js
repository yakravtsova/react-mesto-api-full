import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({ isMain, isOpen, userEmail, handleMenuOpen }) {
  
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem('token');
    navigate('/sign-in', { replace: true });
    handleMenuOpen();
  }
  
  return(
    <nav className={`header__menu ${isMain && 'header__menu_open'} ${(!isOpen && isMain) && 'header__menu_hidden'}`}>
      <ul className="header__menu-list">
        <li className="header__menu-item header__user-email">{userEmail}</li>
        <li className="header__menu-item"><button className="header__exit-link" onClick={signOut}>Выйти</button></li>
      </ul>
    </nav>
  )
}

export default Menu;