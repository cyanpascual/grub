import React from 'react';
import '../../../assets/hover-login.css';

function App(props) {
    var {title,author,text} = props;
    return (
    <div class="thumbnail"> <a href="#"><img src="bkg_06.jpg" alt="" width="2000" class="cards"/></a>
        <h4>{title}</h4>
    <p class="tag">{author}</p>
        <p class="text_column">{text.substring(0,80)}<br/><a href="Post">Read more</a></p>
    </div>
    );
}

export default App;
