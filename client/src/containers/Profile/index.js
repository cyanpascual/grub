import React from 'react';
import '../../assets/aboutPageStyle.css';

function App() {
  return (
<body class="about">
{/* <!-- Header content --> */}

<header>
  <div class="profileLogo"> 
    {/* <!-- Profile logo. Add a img tag in place of <span>. --> */}
    <p class="logoPlaceholder"><span>LOGO</span></p>
  </div>
  <div class="profilePhoto"> 
    {/* <!-- Profile photo -->  */}
    <img src="profilephoto.png" alt="sample"/> </div>
  {/* <!-- Identity details --> */}
  <section class="profileHeader">
    <h1>Jes David Adriel Buaron</h1>
    <h3>Plant Expert, Plant Society</h3>
    <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.</p>
  </section>
 
  <aside class="badgeBar">
    <div class="badgeNav"> 
      <img src="member.png" title="Membership Badge"/> </div>
    <div class="badgeNav"> 
      <img src="activeposter.png"  title="Active Poster"/> </div>
    <div class="badgeNav"> 
      <img src="varietyfarmer.png"  title="Variety Farmer"/> </div>
    <div class="badgeNav"> 
      <img src="topinfluencer.png"  title="Top Influencer"/> </div>
  </aside>
</header>
{/* <!-- content --> */}
<section class="mainContent"> 
  <section class="section1">
    <h2 class="sectionTitle">Interests</h2>
    <hr class="sectionTitleRule"/>
    <hr class="sectionTitleRule2"/>
    <div class="section1Content">
      <p><span>Planting Experience :</span> 2 months</p>
      <p><span>Plants :</span> tomato, lettuce</p>
      <p><span>Interested in :</span> hydroponics</p>
      <p><span>Member since :</span> 20 August 2020</p>
    </div>
  </section>
 
  <section class="section2">
    <h2 class="sectionTitle">Forum Posts</h2>
    <hr class="sectionTitleRule"/>
    <hr class="sectionTitleRule2"/>

    <article class="section2Content">
      <h2 class="sectionContentTitle">Title of Post</h2>
      <h3 class="sectionContentSubTitle">Date posted: 20 August 2020</h3>
      <p class="sectionContent"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. </p>
    </article>

    <article class="section2Content">
      <h2 class="sectionContentTitle"> Title of Post</h2>
      <h3 class="sectionContentSubTitle">Date posted: 20 August 2020</h3>
      <p class="sectionContent"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. </p>
    </article>

  </section>

  <aside class="externalResourcesNav">
    <div class="externalResources"><a href="#" title="">MESSAGE</a> </div>
  </aside>
</section>
{/* <!-- CREDITS
Reference

Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

<div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
--> */}
</body>
  );
}

export default App;
