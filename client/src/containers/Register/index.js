import React from 'react';
import '../../assets/hover-login.css';

function App() {
  return (
<body>
<center><div class="hover1" id="register">
	<div class="hover1" id="reg-logo"><a href="landing.html"><img src="grub-logo.png" alt="Grub"/></a></div>
	<p id="reg-text">G register.</p>
	<div class="hover1" id="reg-form">
		<form action="/">
			<input type="text" id="text-form" name="email" placeholder="email" required/><br/>
			<input type="password" id="text-form" name="pw1" placeholder="password" minlength="8" required/><br/>
			<input type="password" id="text-form" name="pw2" placeholder="confirm password" minlength="8" required/><br/>
			<input type="submit" value="Create your account"/><br/>
			<hr id="line"/>

		</form>
		<p id="reg-text-2">Already a member? <a href="Login">Log in.</a></p>
	</div>
</div></center>
	
</body>
  );
}

export default App;
