import React,{useContext, useState} from 'react';
import '../../assets/hover-login.css';
import { LoginAndSignUpContext } from '../../context/LoginAndSignUpContext';
import {Route} from 'react-router-dom'
import app from "../../fire";
function App() {
    const {setAuthed,authed, username} = useContext(LoginAndSignUpContext);
    var [email, setEmail] = useState('')
	var [password, setPassword] = useState('')


    return (
    <center>
            <div class="hover1" id="register">
                <div class="hover1" id="reg-logo"><a href="/Landing"><img src="grub-logo.png" alt="Grub"/></a></div>
                <p id="reg-text">Log in to continue.</p>
                <div class="hover1" id="reg-form">


                        <input type="text" id="text-form" name="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                        <input type="password" id="text-form" name="pw1" placeholder="password" minlength="8" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                        <Route render={({ history}) => (
                        <input type="submit" value="Log in" onClick={async event => {
                            event.preventDefault();
                        
                            try {
                                await app
                                .auth()
                                .signInWithEmailAndPassword(email, password);
                                setAuthed(true)
                                history.push('/Profile')
                            } catch (error) {
                                alert(error);
                            }
                            }}>
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
