import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignInLink({ path }) {
  const navigate = useNavigate();
  function redirect() {
    navigate("/sign-in", {replace: true})
  }
  return(
    <button className={`header__link ${(path==='/sign-up') && 'header__link_active'}`} onClick={redirect}>Войти</button>
  )
}

export default SignInLink;