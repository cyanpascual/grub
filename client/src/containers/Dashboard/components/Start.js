import React,{useContext} from 'react';
//import '../../../assets/iframe-style.css';

function App() {
    return (
        <body>
<div class="wrapper">
  <header>
    <h1>Start your urban gardening journey!</h1>
    <span></span>
  </header>
  

  
  <div class="sections">
    
    <section class="active">
      <input type="number" placeholder="Area available (in sqm.)" id="area" required/>
		<input type="text" placeholder="Soil type" id="soil" required/>
		{/* <!-- CYAN: Soil Type is dropdown; choices: sandy, silt, clay, loamy --> */}
		
		<input type="text" placeholder="Sunlight" id="sunlight" required/>
		{/* <!-- CYAN: Sunlight is dropdown; choices: direct, under glass, windowsill, partial shade, full shade --> */}
		
		<input type="number" placeholder="Time available for gardening (hrs/day)" id="availableTime" required/>
		
		<input type="text" placeholder="Level of commitment" id="commLevel" required/>
		{/* <!-- CYAN: Level of commitment is dropdown; choices: low, medium, high --> */}
	
		<input type="text" placeholder="Location" id="location" required/>
		<input type="number" placeholder="Budget (in Php)" id="budget" required/>
		<input type="text" placeholder="Plant type" id="plantType" required/>
		{/* <!-- CYAN: Plant type is dropdown; choices: organic / inorganic --> */}
            
    </section>
  </div>
  
  <footer>
    <ul>
      <li><span id="reset">reset</span></li>
      <li><span id="submit"><a href="plantresult.html">Submit</a></span></li>
    </ul>
  </footer> 
  
</div>
<div class="notification"></div>
	

</body>
    );
}

export default App;
