import React from 'react';
import logo from '../images/header-logo.svg';
import SignInLink from './SignInLink';
import SignUpLink from './SignUpLink';
import MenuButton from './MenuButton';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';

function Header({ userEmail }) {
  const loc = useLocation();
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const isMain = (loc.pathname === '/');
  
  function handleMenuOpen() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <header className="header">
      <div className="header__wrap">
        <img className="header__logo" src={logo} alt="Место Россия"/>
        <SignInLink path={loc.pathname} />
        <SignUpLink path={loc.pathname} />
        <MenuButton path={loc.pathname} isMenuOpened={isMenuOpened} handleMenuOpen={handleMenuOpen} isMain={isMain} />
      </div>
      <Menu isOpen={isMenuOpened} handleMenuOpen={handleMenuOpen} userEmail={userEmail} isMain={isMain} />

    </header>
  );
}

export default Header;