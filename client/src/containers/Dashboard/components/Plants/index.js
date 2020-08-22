import React,{useContext} from 'react';
import '../../../../assets/index.css';

function App() {
    return (
        <body>
	
	
	<div id="welcome">PLANT PROFILE</div>
	
	<center>
	<div id="content">
    
	<section class="mainContent">
      <div class="productRow">
        <article class="productInfo">
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">Plant Name</p>
          <p class="productContent">Location: Brgy. Kaligayahan <br/> Date Planted: 21 Aug 2020</p>
          <input type="button" name="button" value="Germination Progress" class="buyButton2"/>
			<input type="button" name="button" value="Harvest Progress" class="buyButton2"/>
        </article>
      </div>

    </section>
	</div></center>
		
	<div id="welcome">COMMON PROBLEMS</div>
	
	<center>
	<div id="content">
    
	<section class="mainContent">
      <div class="productRow">
        <article class="productInfo">
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">Plant Name</p>
          <p class="productContent">Disease Type</p>
        </article>
    
      </div>

    </section>
	</div></center>
	<div id="welcome"><a href="iframe-5.html">Pest/Disease Identifier</a></div>
</body>
    );
}

export default App;
