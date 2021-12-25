import React, { useState, useContext } from 'react';
import { useHistory} from 'react-router-dom'
import { LoginContext } from '../context/LoginContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTheButtonDisabled, setIsTheButtonDisabled] = useState(true);
const { setLogin } = useContext(LoginContext);

const history = useHistory();

  function enabledButton() {
    const minCharactersPass = 6;
    const regexEmail = (/\S+@\S+\.co/);
    const validateEmail = regexEmail.test(String(email));

    if (password.length >= minCharactersPass && validateEmail) {
      setIsTheButtonDisabled(false);
    } else {
      setIsTheButtonDisabled(true);
    }
  }

  function handleInputEmail({ target: { value } }) {
    setEmail(value);
    enabledButton();
  }

  function handleInputPass({ target: { value } }) {
    setPassword(value);
    enabledButton();
  }

  function handleClick() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    setLogin({ email })
    history.push('/search')

  }

  return (
    <div>
      <input
        type="text"
        name="email"
        data-testid="email-input"
        placeholder="Email"
        onChange={ handleInputEmail }
      />
      <input
        type="text"
        name="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={ handleInputPass }
      />
      <input
        type="button"
        value="Entrar"
        data-testid="login-submit-btn"
        disabled={ isTheButtonDisabled }
        onClick={ handleClick }
      />
    </div>
  );
}

export default Login;
