import React,{useContext} from 'react';
import '../../assets/hover-login.css';
import { LoginContext } from '../../context/LoginContext';
import {Route} from 'react-router-dom'

function App() {
    const {setAuthed,authed, username, password, setUsername,setPassword} = useContext(LoginContext);

    return (
    <center>
            <div class="hover1" id="register">
                <div class="hover1" id="reg-logo"><a href="/Landing">{authed? 'true':'false'}</a></div>
                <p id="reg-text">Log in to continue.</p>
                <div class="hover1" id="reg-form">


                        <input type="text" id="text-form" name="email" placeholder="email" value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br/>
                        <input type="password" id="text-form" name="pw1" placeholder="password" minlength="8" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                        <Route render={({ history}) => (
                        <input type="submit" value="Log in" onClick={() => {
                            setAuthed(true)
                            history.push('/Profile') }}>
                            
                        </input>
                        )} />
        
                        <p id="reg-text-3">Forgot password? Click <a href="">here</a> to reset.</p>
                        <hr id="line"/>

        
                    <p id="reg-text-2">Not a member yet? <a href="Register">Click here to register.</a></p>
                </div>
            </div>
        </center>
    );
}

export default App;
