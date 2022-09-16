import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpLink({ path }) {
  const navigate = useNavigate();
  function redirect() {
    navigate("/sign-up", {replace: true})
  }
  return(
    <button className={`header__link ${(path==='/sign-in') && 'header__link_active'}`} onClick={redirect}>Регистрация</button>
  )
}

export default SignUpLink;