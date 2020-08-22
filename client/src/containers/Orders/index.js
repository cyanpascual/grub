import React from 'react';
import '../../assets/index.css';

function App() {
  return (
    <body>
	

	<center><div id="welcome">MY ORDERS</div></center>
	
	<center>
	<div id="content">
    <section class="sidebar2"> 
      {/* <!-- This adds a sidebar with 1 searchbox,2 menusets, each with 4 links --> */}
      
      <div id="menubar">
        <nav class="menu-mk">
        {/* <!-- Title for menuset 1 --> */}
          <h2>My orders </h2>
          <hr/>
          <ul>
            {/* <!-- List of links under menuset 1 --> */}
            <li><a href="#" title="Link">All</a></li>
            <li><a href="#" title="Link">To Ship</a></li>
            <li><a href="#" title="Link">To Pay</a></li>
            {/* <!-- notimp class is applied to remove this link from the tablet and phone views --> */}
            <li class="notimp"><a href="#"  title="Link">To Receive</a></li>
          </ul>
        </nav>
        <nav class="menu-mk">
          <h2>My Account </h2>
          {/* <!-- Title for menuset 2 --> */}
          <hr/>
          <ul>
            {/* <!--List of links under menuset 2 --> */}
            <li><a href="#" title="Link">My Reviews</a></li>
            <li><a href="#" title="Link">My Wishlist</a></li>
            <li><a href="#" title="Link">Favorite Sellers</a></li>
            {/* <!-- notimp class is applied to remove this link from the tablet and phone views --> */}
            <li class="notimp"><a href="#" title="Link">Another One</a></li>
          </ul>
        </nav>
      </div>
    </section>
	
	<section class="mainContent">
      <div class="productRow">
          {/* <!-- Each product row contains info of 3 elements --> */}
        <article class="productInfo">
            {/* <!-- Each individual product description --> */}
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">P50/kg</p>
          <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98% </p>
          <input type="button" name="button" value="Reorder" class="buyButton"/>
        </article>
        <article class="productInfo">
            {/* <!-- Each individual product description --> */}
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">P50/kg</p>
          <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
          <input type="button" name="button" value="Reorder" class="buyButton"/>
        </article>
        <article class="productInfo"> 
        {/* <!-- Each individual product description --> */}
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">P50/kg</p>
          <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
          <input type="button" name="button" value="Reorder" class="buyButton"/>
        </article>
      </div>
      <div class="productRow"> 
        {/* <!-- Each product row contains info of 3 elements --> */}
        <article class="productInfo"> 
        {/* <!-- Each individual product description --> */}
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">P50/kg</p>
          <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
          <input type="button" name="button" value="Reorder" class="buyButton"/>
        </article>
        <article class="productInfo"> 
        {/* <!-- Each individual product description --> */}
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">P50/kg</p>
          <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
          <input type="button" name="button" value="Reorder" class="buyButton"/>
        </article>
        <article class="productInfo">
            {/* <!-- Each individual product description --> */}
          <div><img alt="sample" src="200x200.png"/></div>
          <p class="price">P50</p>
          <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
          <input type="button" name="button" value="Reorder" class="buyButton"/>
        </article>
      </div>

    </section>
	</div></center>
		<center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
</body>
  );
}

export default App;
