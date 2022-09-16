import { useState } from 'react';

function Login({ handleAuthorization }) {
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
    if (!email || !password) {
      return;
    }
    handleAuthorization(email, password);
  }

  return(
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form">
        <input className="login__input" type="email" placeholder="Email" onChange={handleEmailChange} required />
        <input className="login__input" type="password" placeholder="Пароль" onChange={handlePasswordChange} required />
        <input className="login__button" type="submit" value="Войти" onClick={handleSubmit} />
      </form>
    </section>
  )
}

export default Login;