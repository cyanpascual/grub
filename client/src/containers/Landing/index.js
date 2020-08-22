import React from 'react';
import '../../assets/index.css';

function App() {
  return (
    <body style={{backgroundColor: "#f0f9e4"}}>

    <section class="main-feat" id="feature1">
        <center><img src="f1.png" width="725" height="709" alt=""/></center>
            <p class="feat-title">Gardening Companion</p>
            <p class="feat-desc">Grub provides an instant guide on how to tend to your garden based on unique user input to avoid the hassle of browsing for information and saves time that is valuable to the fast-paced lifestyle.</p>
            {/* <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Jes David Buaron <br/> Plant Expert <br/> Plant Society</span><br/>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Jes David Buaron <br/> Plant Expert <br/> Plant Society</span> */}
        </section>
    <section class="main-feat" id="feature2">
            <center><img src="f2.png" width="725" height="709" alt=""/></center>
            <p class="feat-title">Market Gardening</p>
            <p class="feat-desc">The Grub marketplace allows buyers to find produce based on proximity and allows gardeners to earn an income from their hard-earned harvest.</p>
            {/* <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Vegetable 1 <br/> Brgy. Kaligayahan <br/> P23.00/kg</span><br/>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">Vegetable 2 <br/> Brgy. Kaligayahan <br/> P23.00/kg</span> */}
        </section>
    <section class="main-feat" id="feature3">
            <center><img src="f3.png" width="725" height="709" alt=""/></center>
            <p class="feat-title">Urban Community</p>
            <p class="feat-desc">Grub provides a platform for the community to contribute information and centralizes this for easier access to find what you need with less time.</p>
            {/* <span class="feat-imgcont"></span>
            <span class="feat-contdesc">TITLE OF POST <br/> by Jes David Buaron <br/> # reax • # comments</span><br/>
            <span class="feat-imgcont"></span>
            <span class="feat-contdesc">TITLE OF POST <br/> by Jes David Buaron <br/> # reax • # comments</span> */}
        </section>
    <center><div id="welcome">Be part of the Grub community. <a href="Register">now.</a></div></center>
    <center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
    </body>
  );
}

export default App;
