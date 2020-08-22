
import React,{useContext} from 'react';
import '../../../../../assets/index.css';
import {Grid} from '@material-ui/core';
function App() {
    return (
        <React.Fragment>
            <Grid container>
            <Grid xs={12} item><h1>1. Steven Go</h1></Grid>
            <Grid item xs={12}>
                <img src="member.png" title="Membership Badge" style={{width:'5%'}}/> 
                <img src="activeposter.png"  title="Active Poster" style={{width:'5%'}}/> 
                <img src="varietyfarmer.png"  title="Variety Farmer" style={{width:'5%'}}/> 
                <img src="topinfluencer.png"  title="Top Influencer" style={{width:'5%'}}/> 
            </Grid>
            <Grid xs={12} item>
                <p>Plants <br/>Tomatoes: 10 kg<br/>Basil: 20 kg<br/>Calamansi: 10 kg</p>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}

export default App;
