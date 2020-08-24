import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers';
import * as serviceWorker from './serviceWorker';
import LoginAndSignUpContextProvider from './context/LoginAndSignUpContext';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginAndSignUpContextProvider>
        <App/>
      </LoginAndSignUpContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
