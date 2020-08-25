import React,{useContext} from 'react';
import '../../../../assets/index.css';
import Member from './components/Member';
import {SampleDataContext} from '../../../../context/SampleDataContext'
import {Grid} from '@material-ui/core';
function App() {

    const {profileData,setProfileData, articleData} = useContext(SampleDataContext);

    // 'id':4,
    // "email": '',
    // 'name':'Steve',
    // "description": "",
    // 'interest':{
    //     'planting_experience':'Onions',
    //     "plants": [-1],
    //     'interested_in':'',
    //     "member_since": "2020-08-25"
    // },
    // "badges": [5],
    // "postIDs": [-1],
    // 'image':null,
    // 'community':''
    return (
        <div>
            <body>
                <div class="wrapper1">
                    <h3>Community <br/> Milk Team</h3>
                    <h2>Location: Brgy: UP Campus, Quezon City</h2>
                    {profileData.map((member)=>{
                        return(
                            <React.Fragment>
                                <Grid container>
                                <Grid xs={12} item><h1>{member.name}</h1></Grid>
                                <Grid item xs={12}>
                                    {member.badges.map((badgeCode)=>{
                                    if(badgeCode==1){return(<div class="badgeNav"><img src="member.png" title="Membership Badge" style={{width:'5%'}}/></div>)}
                                    else if(badgeCode==2){return(<div class="badgeNav"><img src="activeposter.png"  title="Active Poster" style={{width:'5%'}}/></div>)}
                                    else if(badgeCode==3){return(<div class="badgeNav"><img src="varietyfarmer.png"  title="Variety Farmer" style={{width:'5%'}}/></div>)}
                                    else if(badgeCode==4){return(<div class="badgeNav"><img src="topinfluencer.png"  title="Top Influencer" style={{width:'5%'}}/></div>)}
                                    else{return(null)}
                                    })}
                                </Grid>
                                <Grid xs={12} item>
                                <p>Plants <br/>{member.interest.plants}</p>
                                </Grid>
                            </Grid>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div class="wrapper2">
                    <h3>- Community Leaderboard -</h3>
                <header>
                    <h1>Most Number of Members</h1>
                    <span></span>
                </header>
                <p>1. Plantitas of UP Diliman <br/>2. Plantitas of Manila <br/>3. Plantitas of Katipunan</p>
                <header>
                    <h1>Most Number of Plants</h1></header>
                <p>1. Milk Team<br/>2. SMEgriculture<br/>3. Team Ho 1</p>
                <header>
                    <h1>Gardener of the Week</h1></header>
                <p>Thea Viktoria Ogalesco <br/>Community: Milk Team</p>
                </div>
            </body>
        </div>
    );
}

export default App;
