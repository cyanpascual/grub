import React, { createContext, useState } from 'react';
export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const logout = () => {
    setAuthed(false);
    setUsername('');
    setPassword(''); 
  }

  return(
    <LoginContext.Provider value={{ authed, setAuthed,username, setUsername, password, setPassword, logout }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;