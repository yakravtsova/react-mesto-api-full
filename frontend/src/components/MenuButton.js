import React from 'react';

function MenuButton({ isMenuOpened, handleMenuOpen, isMain }) {
    
  return(
    <button onClick={handleMenuOpen} className={`header__menu-button ${(isMain && 'header__menu-button_open')} ${isMenuOpened && 'header__menu-button_close'}`}>
        <span className={`header__menu-bar ${isMenuOpened && 'header__menu-bar_hidden'}`}></span>
        <span className={`header__menu-bar ${isMenuOpened && 'header__menu-bar_hidden'}`}></span>
        <span className={`header__menu-bar ${isMenuOpened && 'header__menu-bar_hidden'}`}></span>
      </button>
  )
}

export default MenuButton;