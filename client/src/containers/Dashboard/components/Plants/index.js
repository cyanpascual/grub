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
        <PlantProfile/>
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
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">Plant Name</p>
          <p class="productContent">Disease Type</p>
        </article>
    
      </div>

    </section>
	</div></center>
	{/* <div id="welcome"><a href="iframe-5.html">Pest/Disease Identifier</a></div> */}
</body>
    );
}

export default App;
