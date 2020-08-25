import React, {useContext} from 'react';
import '../../assets/index.css';
import {SampleDataContext} from '../../context/SampleDataContext'
function App() {
    const {marketData} = useContext(SampleDataContext);

  return (
    <body style={{backgroundColor: "#f0f9e4"}}>
	
    

        <center><div id="welcome">MARKETPLACE</div></center>
        
        <center>
        <div id="content">
        <section class="sidebar2"> 
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
        {/* {
         "id": 1,
         "price": "70.00",
         "product": "Red Onions",
         "hdate": "2020-08-24",
         "prod_pic": 'violet.jpg'
     } */}
        {marketData.map((post)=>{
            if([1,2,3].includes(post.id)){
                return(
                    <article class="productInfo">
                        <div><img alt="sample" src={post.prod_pic}/></div>
                        <p class="price">P{post.price}/kg</p>
                        <p class="productContent">Product <br/> Harvest Date: {post.hdate}</p>
                        <input type="button" name="button" value="Buy" class="buyButton"/>
                    </article>)
            } else{return null}
        })}

           
        </div>
        <div class="productRow"> 
        {marketData.map((post)=>{
            if( [4,5].includes(post.id)){
                return(
                    <article class="productInfo">
                        <div><img alt="sample" src={post.prod_pic}/></div>
                        <p class="price">P{post.price}/kg</p>
                        <p class="productContent">Product <br/> Harvest Date: {post.hdate}</p>
                        <input type="button" name="button" value="Buy" class="buyButton"/>
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
