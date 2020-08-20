import React from 'react';
import '../../assets/index.css';

function App() {
  return (
    <body style={{backgroundColor: "#f0f9e4"}}>
	<header class="main-h1" id="h1">
		<a href="landing.html"><img src="grub-logo.png" alt=""/></a>
		<div id="menu">
			<ul>
			  <div class="dropdown">
				  <button class="dropbtn">PROFILE</button>
				  <div class="dd1-cont">
					  <a href="Landing">User Name</a>
					  <a href="dashboard.html">Dashboard</a>
				  </div>
			  </div>
			  <div class="dropdown">
				  <button class="dropbtn">COMMUNITY</button>
				<div class="dd2-cont">
					<a href="forum.html">Forum</a>
					<a href="tutorials.html">Video Library</a>
				</div>
			  </div>
			  <div class="dropdown">
				  <button class="dropbtn">SHOP</button>
				  <div class="dd3-cont">
					  <a href="marketplace.html">Marketplace</a>
					  <a href="orders.html">My orders</a>
				  </div>
			  </div>
		  </ul>
		</div>
    </header>
    <section class="main-feat" id="feature1">
        <center><img src="f1.png" width="725" height="709" alt=""/></center>
            <p class="feat-title">FEATURE 1</p>
            <p class="feat-desc">Lorem ipsum dolor sit amet, in mei facete sadipscing</p>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Jes David Buaron <br/> Plant Expert <br/> Plant Society</span><br/>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Jes David Buaron <br/> Plant Expert <br/> Plant Society</span>
        </section>
    <section class="main-feat" id="feature2">
            <center><img src="f2.png" width="725" height="709" alt=""/></center>
            <p class="feat-title">FEATURE 2</p>
            <p class="feat-desc">Lorem ipsum dolor sit amet, in mei facete sadipscing</p>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Vegetable 1 <br/> Brgy. Kaligayahan <br/> P23.00/kg</span><br/>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Vegetable 2 <br/> Brgy. Kaligayahan <br/> P23.00/kg</span>
        </section>
    <section class="main-feat" id="feature3">
            <center><img src="f3.png" width="725" height="709" alt=""/></center>
            <p class="feat-title">FEATURE 3</p>
            <p class="feat-desc">Lorem ipsum dolor sit amet, in mei facete sadipscing</p>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">TITLE OF POST <br/> by Jes David Buaron <br/> # reax • # comments</span><br/>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">TITLE OF POST <br/> by Jes David Buaron <br/> # reax • # comments</span>
        </section>
    <center><div id="welcome">Lorem impsum dolor sit amet? Join us <a href="register.html">now.</a></div></center>
    <center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
    </body>
  );
}

export default App;
