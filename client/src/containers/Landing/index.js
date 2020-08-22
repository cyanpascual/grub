import React from 'react';
import '../../assets/index.css';

function App() {
  return (
    <body style={{backgroundColor: "#f0f9e4"}}>

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
    <center><div id="welcome">Lorem impsum dolor sit amet? Join us <a href="Register">now.</a></div></center>
    <center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
    </body>
  );
}

export default App;
