import React, {useState,useContext} from 'react';
import '../../assets/aboutPageStyle.css';
import app from "../../fire";
import {SampleDataContext} from '../../context/SampleDataContext'
import {TextField, CssBaseline} from '@material-ui/core';


function App() {

  const {profileData,setProfileData, articleData} = useContext(SampleDataContext);
  var currentUser = profileData[0]
        {/*'id': 1,
        "email": 'notcyanpascual@gmail.com',
        'name':'Cy Pascual',
        "description": "I like plants. I like green plants. I like vegetables. I like green vegetables.",
        'interest':{
            'planting_experience':'1 year',
            "plants": 'Carrots',
            'interested_in':'Green plants',
            "member_since": "2020-08-25"
        },
        "badges": [1,2],
        "postIDs": [0],
        'image':null,
        'community':'Milk Team' */}
  const [edit,setEdit] = useState(false);
  const [email,setEmail] =  useState(currentUser.email)
  const [name,setName] = useState(currentUser.name)
  const [description,setDescription] = useState(currentUser.description)
  const [planting_experience,setPlanting_experience] = useState(currentUser.interest.planting_experience)
  const [plants,setPlants] = useState(currentUser.interest.plants)
  const [interested_in,setInterested_in] = useState(currentUser.interest.interested_in)
  const [member_since,setMember_since] = useState(currentUser.interest.member_since)
  const [badges,setBadges] = useState(currentUser.badges)
  const [postIDs,setPostIDs] = useState(currentUser.postIDs)
  const [image,setImage] = useState(null)
  const [community,setCommunity] = useState(currentUser.community)

  var articles = articleData
  return (
    <body class="about">
    {/* <!-- Header content --> */}

    <header>
      <div class="profileLogo"> 
        {/* <!-- Profile logo. Add a img tag in place of <span>. --> */}
        <p class="logoPlaceholder"><span>LOGO</span></p>
      </div>
      {/* <div class="profilePhoto">  */}
        {/* <!-- Profile photo -->  */}
        {/* <img src="profilephoto.png" alt="sample"/> </div> */}
      {/* <!-- Identity details --> */}
      <section class="profileHeader">
        <h1>{edit? <TextField variant="filled" color="secondary" label='Name' value={name} defaultValue={currentUser.name} onChange={(e)=>{setName(e.target.value)}}/>: currentUser.name}</h1>
        <h3>{edit? <TextField variant="filled" color="secondary" label='Email' value={email} defaultValue={currentUser.email} onChange={(e)=>{setEmail(e.target.value)}}/>:currentUser.email}</h3>
        <aside class="badgeBar">
        {currentUser.badges.map((badgeCode)=>{
          if(badgeCode==1){return(<div class="badgeNav"><img src="member.png" title="Membership Badge"/></div>)}
          else if(badgeCode==2){return(<div class="badgeNav"><img src="activeposter.png"  title="Active Poster"/></div>)}
          else if(badgeCode==3){return(<div class="badgeNav"><img src="varietyfarmer.png"  title="Variety Farmer"/></div>)}
          else if(badgeCode==4){return(<div class="badgeNav"><img src="topinfluencer.png"  title="Top Influencer"/></div>)}
          else{return(null)}
        })}
      </aside>
        <hr/>
        <p>{edit? <TextField variant="filled" color="secondary" multiline label='Description' value={description} defaultValue={currentUser.description} onChange={(e)=>{setDescription(e.target.value)}}/>:currentUser.description}</p>
      </section>
      {/*'id': 1,
        "email": 'notcyanpascual@gmail.com',
        'name':'Cy Pascual',
        "description": "I like plants. I like green plants. I like vegetables. I like green vegetables.",
        'interest':{
            'planting_experience':'1 year',
            "plants": 'Carrots',
            'interested_in':'Green plants',
            "member_since": "2020-08-25"
        },
        "badges": [1,2],
        "postIDs": [0],
        'image':null,
        'community':'Milk Team' */}

    </header>
    {/* <!-- content --> */}
    <section class="mainContent"> 
      <section class="section1">
        <h2 class="sectionTitle">Interests</h2>
        <hr class="sectionTitleRule"/>
        <hr class="sectionTitleRule2"/>
        <div class="section1Content">
          <p><span>Planting Experience :</span>{edit? <TextField variant="filled" color="secondary" value={planting_experience} defaultValue={currentUser.interest.planting_experience} onChange={(e)=>{setPlanting_experience(e.target.value)}}/>: currentUser.interest.planting_experience}</p>
          <p><span>Plants :</span>{edit? <TextField variant="filled" color="secondary" value={plants} defaultValue={currentUser.interest.plants} onChange={(e)=>{setPlants(e.target.value)}}/>: currentUser.interest.plants}</p>
          <p><span>Interested in :</span>{edit? <TextField variant="filled" color="secondary" value={interested_in} defaultValue={currentUser.interest.interested_in} onChange={(e)=>{setInterested_in(e.target.value)}}/>: currentUser.interest.interested_in}</p>
          <p><span>Member since :</span>{edit? <TextField variant="filled" color="secondary" value={member_since} defaultValue={currentUser.interest.member_since} onChange={(e)=>{setMember_since(e.target.value)}}/>: currentUser.interest.member_since}</p>
        </div>
      </section>
    
      <section class="section2">
        <h2 class="sectionTitle">Forum Posts</h2>
        <hr class="sectionTitleRule"/>
        <hr class="sectionTitleRule2"/>
        {/* "id": 1,
            "title": "hi",
            "dateArticle": "2020-08-22",
            "post": "hello" */}
        {articles.map((article)=>{
          if(currentUser.postIDs.includes(article.id)){
            return(<article class="section2Content">
            <h2 class="sectionContentTitle">{article.title}</h2>
            <h3 class="sectionContentSubTitle">Date posted: {article.dateArticle}</h3>
            <p class="sectionContent"> {article.post}</p>
          </article>)
          }
          else{return(null)}
        })}
        

        

      </section>

      <aside class="externalResourcesNav">
        <div class="externalResources"><a href="#" title="" onClick={(e)=>{
          e.preventDefault()
          if(edit){
            var updateEntry = {
              'id': currentUser.id,
              "email": email,
              'name':name,
              "description": description,
              'interest':{
                  'planting_experience':planting_experience,
                  "plants": plants,
                  'interested_in':interested_in,
                  "member_since": member_since
              },
              "badges": currentUser.badges,
              "postIDs": currentUser.postIDs,
              'community':'Milk Team'
            }
            let newArr = [...profileData]; // copying the old datas array
            newArr[currentUser.id -1] = updateEntry; // replace e.target.value with whatever you want to change it to
            setProfileData(newArr);

            setEdit(false)
          }
          else{setEdit(true)}
          }}>{edit ? 'Save':'Edit'}</a> </div>
          
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
