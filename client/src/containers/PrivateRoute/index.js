import React, {useContext} from 'react';
import '../../assets/hover-login.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
function PrivateRoute ({component: Component, ...rest}) {
    const {authed} = useContext(LoginContext);
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component/>
          : <Redirect to={{pathname: '/Login'}} />}
      />
    )
  }

export default PrivateRoute;
