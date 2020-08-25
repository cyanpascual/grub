import React, {useContext} from 'react';
import '../../assets/index.css';
import {SampleDataContext} from '../../context/SampleDataContext'
function App() {
  const {marketData} = useContext(SampleDataContext);
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
          <h2>My Store</h2>
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

          {marketData.map((post)=>{
            if([1,5].includes(post.id)){
                return(
                    <article class="productInfo">
                        <div><img alt="sample" src={post.prod_pic}/></div>
                        <p class="price">P{post.price}/kg</p>
                        <p class="productContent">Product <br/> Harvest Date: {post.hdate}</p>
                        <input type="button" name="button" value="Edit" class="buyButton"/>
                    </article>)
            } else{return null}
        })}
       
      </div>

    </section>
	</div></center>
		<center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
</body>
  );
}

export default App;
