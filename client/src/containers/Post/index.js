import React from 'react';
import '../../assets/blogPostStyle.css';

function App() {
  return (
<body style={{height:"1000",width:"1600"}}>

    <div id="mainwrapper">
        <div id="content">
            <div class="notOnDesktop"> 
            <input type="text" placeholder="Search"/>
            </div>
            <section id="mainContent"> 
            {/* <!-- Blog title --> */}
            <h1>Post Title</h1>
            {/* <!-- Tagline --> */}
            <h3>Posted 20 August 2020 by <a href="Profile">Jes David Adriel Buaron</a></h3>
            <div id="bannerImage"><img src="SliderLayerImage.png" alt=""/></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </section>
            <section id="sidebar"> 
            
            <input type="text" placeholder="Search"/>
            <div id="adimage"><img src="300x250.gif" alt=""/></div>
            <nav>
                <ul>
                <li><a href="#" title="Link">Related Post 1</a></li>
                <li><a href="#" title="Link">Related Post 2</a></li>
                <li><a href="#" title="Link">Related Post 3</a></li>
                <li><a href="#" title="Link">Related Post 4</a></li>
                <li><a href="#" title="Link">Related Post 5</a></li>
                <li><a href="#" title="Link">Related Post 6</a></li>
                </ul>
            </nav>
            </section>
        </div>
    </div>
</body>
  );
}

export default App;
