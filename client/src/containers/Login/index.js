import React from 'react';
import '../../assets/hover-login.css';

function App() {
  return (
  <center>
        <div class="hover1" id="register">
            <div class="hover1" id="reg-logo"><a href="landing.html"><img src="grub-logo.png" alt="Grub"/></a></div>
            <p id="reg-text">Log in to continue.</p>
            <div class="hover1" id="reg-form">
                <form action="/">
                    <input type="text" id="text-form" name="email" placeholder="email" required/><br/>
                    <input type="password" id="text-form" name="pw1" placeholder="password" minlength="8" required/><br/>
                    <input type="submit" value="Log in"/><br/>
                    <p id="reg-text-3">Forgot password? Click <a href="">here</a> to reset.</p>
                    <hr id="line"/>
                    <input type="submitsm1" value="Log in using Facebook"/><br/>
                    <input type="submitsm2" value="Log in using Google"/>
                </form>
                <p id="reg-text-2">Not a member yet? <a href="register.html">Click here to register.</a></p>
            </div>
        </div>
    </center>
  );
}

export default App;
