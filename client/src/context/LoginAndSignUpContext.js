import React, { createContext, useState, useEffect } from 'react';
import app from "../fire.js"
import {Route} from 'react-router-dom'
export const LoginAndSignUpContext = createContext();

const LoginAndSignUpContextProvider = (props) => {
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    setAuthed(false);
    setUsername('');
    setPassword(''); 
  }

  useEffect(()=>{
    app.auth().onAuthStateChanged(setCurrentUser);
  }, [])





  return(
    <LoginAndSignUpContext.Provider value={{ currentUser,authed, setAuthed,username, setUsername, password, setPassword, logout }}>
      {props.children}
    </LoginAndSignUpContext.Provider>
  );
}

export default LoginAndSignUpContextProvider;