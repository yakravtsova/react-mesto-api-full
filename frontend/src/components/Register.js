import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ handleRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(email, password); 
  }

  return(
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input className="login__input" type="email" placeholder="Email" onChange={handleEmailChange} />
        <input className="login__input" type="password" placeholder="Пароль" onChange={handlePasswordChange} />
        <input className="login__button" type="submit" value="Зарегистрироваться" />
      </form>
      <p className="login__registered">Уже зарегистрированы? <Link to="/sign-in" className="login__link">Войти</Link></p>
    </section>
  )
}

export default Register;