import React, {useState} from 'react';
import '../../assets/hover-login.css';
import {Route} from 'react-router-dom';
import app from "../../fire";

function App() {

	var [email, setEmail] = useState('')
	var [password, setPassword] = useState('')


return (
<body>
<center><div class="hover1" id="register">
	<div class="hover1" id="reg-logo"><a href="Landing"><img src="grub-logo.png" alt="Grub"/></a></div>
	<p id="reg-text">G register.</p>
	<div class="hover1" id="reg-form">
		<form>
			<input type="text" id="text-form" name="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
			<input type="password" id="text-form" name="pw1" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} minlength="8" required/><br/>
			{/* <input type="password" id="text-form" name="pw2" placeholder="confirm password" minlength="8" required/><br/> */}
			<Route render={({ history}) => (
				<input type="submit" value="Create your account" onClick={async event => {
					event.preventDefault();
				
					try {
						await app
						.auth()
						.createUserWithEmailAndPassword(email, password)
						.then(()=>{
							var userID = app.auth().currentUser.uid
							app
							.database()
							.ref('profiles/'+userID)
							.set({
								"email": email,
								'name':'',
								"description": "",
								'interest':{
									'planting_experience':'',
									"plants": [-1],
									'interested_in':'',
									"member_since": "2020-08-25"
								},
								"badges": [-1],
								"postIDs": [-1],
								'image':null,
								'community':''
							})
							history.push('/Login')
							
						}

						)
						
					} catch (error) {
						alert(error);
					}
					}}>
				</input>
				)} /><br/>
			<hr id="line"/>

		</form>
		<p id="reg-text-2">Already a member? <a href="Login">Log in.</a></p>
	</div>
</div></center>
	
</body>
  );
}

export default App;
