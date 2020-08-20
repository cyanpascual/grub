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
                        <a href="username.html">User Name</a>
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
        
        <center><div id="welcome">MARKETPLACE</div></center>
        
        <center>
        <div id="content">
        <section class="sidebar"> 
        {/* <!-- This adds a sidebar with 1 searchbox,2 menusets, each with 4 links --> */}
        <input type="text"  id="search" placeholder="search"/>
        <div id="menubar">
            <nav class="menu-mk">
            {/* <!-- Title for menuset 1 --> */}
            <h2>Filter according to </h2>
            <hr/>
            <ul>
                {/* <!-- List of links under menuset 1 --> */}
                <li><a href="#" title="Link">Price</a></li>
                <li><a href="#" title="Link">Harvest Date</a></li>
                <li><a href="#" title="Link">Seller Rating</a></li>
                {/* <!-- notimp class is applied to remove this link from the tablet and phone views --> */}
                <li class="notimp"><a href="#"  title="Link">Another One</a></li>
            </ul>
            </nav>
            <nav class="menu-mk">
            <h2>Products </h2>
            {/* <!-- Title for menuset 2 --> */}
            <hr/>
            <ul>
                {/* <!--List of links under menuset 2 --> */}
                <li><a href="#" title="Link">Fruits</a></li>
                <li><a href="#" title="Link">Vegetables</a></li>
                <li><a href="#" title="Link">Root Crops</a></li>
                {/* <!-- notimp class is applied to remove this link from the tablet and phone views --> */}
                <li class="notimp"><a href="#" title="Link">Herbs</a></li>
            </ul>
            </nav>
        </div>
        </section>
        {/* <!-- Each product row contains info of 3 elements --> */}
        <section class="mainContent">
        <div class="productRow">
        {/* <!-- Each individual product description --> */}
            <article class="productInfo">
                <div><img alt="sample" src="200x200.png"/></div>
                <p class="price">P50/kg</p>
                <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98% </p>
                <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
            <article class="productInfo">
            {/* <!-- Each individual product description --></article> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50/kg</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
            <article class="productInfo">
            {/* <!-- Each individual product description --> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50/kg</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
        </div>
        <div class="productRow"> 
            {/* <!-- Each product row contains info of 3 elements --> */}
            <article class="productInfo"> 
            {/* <!-- Each individual product description --> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50/kg</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
            <article class="productInfo"> 
            {/* <!-- Each individual product description --> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50/kg</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
            <article class="productInfo">
            {/* <!-- Each individual product description --> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
        </div>
        <div class="productRow">
            <article class="productInfo"> 
            {/* <!-- Each individual product description --> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50/kg</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
            <article class="productInfo">
            {/* <!-- Each individual product description --> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50/kg</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
            <article class="productInfo">
            {/* <!-- Each individual product description --> */}
            <div><img alt="sample" src="200x200.png"/></div>
            <p class="price">P50/kg</p>
            <p class="productContent">Product <br/> Harvest Date: 21 Aug 2020 <br/>Seller Rating: 98%</p>
            <input type="button" name="button" value="Buy" class="buyButton"/>
            </article>
        </div>
        </section>
        </div></center>
            <center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
    </body>
  );
}

export default App;
