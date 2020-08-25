import React,{useContext} from 'react';
import '../../../../assets/index.css';
import PlantProfile from './components/PlantProfile'
import CommonProblem from './components/CommonProblem'

function App() {
    return (
        <body>
	
	
	<div id="welcome">PLANT PROFILE</div>
	
	<center>
	<div id="content">
    
	<section class="mainContent">
      <div class="productRow">
        <PlantProfile/>
      </div>

    </section>
	</div></center>
		
	<div id="welcome">COMMON PROBLEMS</div>
	
	<center>
	<div id="content">
    
	<section class="mainContent">
      <div class="productRow">
        <article class="productInfo">
          <div><img alt="sample" src="sickcarrot.jpg"/></div>
          <p class="price">Carrot</p>
          <p class="productContent">Disease Type</p>
        </article>
    
      </div>

    </section>
	</div></center>
	 <div id="welcome"><a href="#">Pest/Disease Identifier</a></div> 
</body>
    );
}

export default App;
