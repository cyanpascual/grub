import React,{useContext} from 'react';
import '../../../../../assets/index.css';

function App() {
    return (
        <article class="productInfo">
            <div><img alt="sample" src="carrot.jpg"/></div>
            <p class="price">Plant Name: Carrot</p>
            <p class="productContent">Location: Brgy. Kaligayahan <br/> Date Planted: 21 Aug 2020</p>
            <input type="button" name="button" value="Germination Progress" class="buyButton2"/>
		    <input type="button" name="button" value="Harvest Progress" class="buyButton2"/>
        </article>
    );
}

export default App;
