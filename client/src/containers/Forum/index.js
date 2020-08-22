import React from 'react';
import '../../assets/hover-login.css';
import PostCards from './components/PostCard'

function App() {

    var sample_data = [
        {
            title:'post 1',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
            tags:['tag 1','tag 2', 'tag 3']
        },
        {
            title:'post 2',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
            tags:['tag 1','tag 2', ]
        },
        {
            title:'post 3',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
            tags:['tag 1']
        },
    ]
    
  return (
<body>
<center>	
	<div id="welcome">FORUM</div>
    <div class="gallery">
    {sample_data.map((post)=>{
        return(<PostCards title={post.title} text={post.title} tags={post.tags}/>)
    })}
    </div></center>
<center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
</body>
  );
}

export default App;
