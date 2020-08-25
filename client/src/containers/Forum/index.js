import React from 'react';
import '../../assets/hover-login.css';
import PostCards from './components/PostCard'

function App() {

    var sample_data = [
        {
            "id": 1,
            "title": "hi",
            'author':'Cy Pascual',
            "dateArticle": "2020-08-22",
            "post": "hello"
        },
        {
            "id": 2,
            "title": "Happy birthday, My Son",
            'author':'Jes Buaron',
            "dateArticle": "2020-08-22",
            "post": "Leaves from the vine, falling so slow"
        },
        {
            "id": 3,
            'author':'Cy Pascual',
            "title": "This is Madness",
            "dateArticle": "2020-08-22",
            "post": "This is SPARTA!"
        },
        {
            "id": 4,
            'author':'Jes Buaron',
            "title": "Test",
            "dateArticle": "2020-08-22",
            "post": "hello"
        },
        {
            "id": 5,
            'author':'Jes Buaron',
            "title": "hello",
            "dateArticle": "2020-08-22",
            "post": "hello"
        }
    ]
    
  return (
<body>
<center>	
	<div id="welcome">FORUM</div>
    <div class="gallery">
    {sample_data.map((post)=>{
        return(<PostCards title={post.title} text={post.title} author={post.author}/>)
    })}
    </div></center>
<center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
</body>
  );
}

export default App;
