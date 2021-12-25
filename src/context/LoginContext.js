import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState();

  const value = {
    login,
    setLogin,
  };

  return (
    <LoginContext.Provider value={ value }>
      { children }
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;

LoginContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
