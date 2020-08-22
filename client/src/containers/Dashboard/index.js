import React,{useContext, useState} from 'react';
import '../../assets/index.css';
import { LoginContext } from '../../context/LoginContext';
import Community from './components/Community'
import Plants from './components/Plants'
import Start from './components/Start'
import PremiumPlans from './components/PremiumPlans'
import { Grid, Card } from '@material-ui/core';

function App() {
    const {setAuthed,authed, username, password, setUsername,setPassword} = useContext(LoginContext);
    const [page,setPage] = useState('Start')
    return (
        <div>
        <center>
        <div id="content">
        <Grid  container spacing={3} style={{padding:10,width:'90vw'}}>
            <Grid xs={3} item>
                <div id="menubar">
                    <nav class="menu-mk">
                   
                    
                        <ul>
                            
                            <li><a onClick={(e)=>{
                                
                                setPage('Start') 
                                }}>Start urban gardening!</a></li>
                            <li><a onClick={(e)=>{
                                
                                setPage('Plants') 
                                }}>My Plants</a></li>
                            <li><a onClick={(e)=>{
                            
                                setPage('Community') 
                                }}>My Community</a></li>
                            {/* <li><a onClick={(e)=>{
                            
                                setPage('PremiumPlans') 
                                }}>Premium Plans</a></li> */}
                        </ul>
                    </nav>
                </div>
        
            </Grid>
            <Grid item xs={9}>
                <Card style={{backgroundColor:'#eceff1', padding:'10'}}>
                {page==='Start'?(<Start/>):null}
                {page==='Plants'?(<Plants/>):null}
                {page==='Community'?(<Community/>):null}
                {page==='PremiumPlans'?(<PremiumPlans/>):null}
                </Card>
            </Grid>

        </Grid>


        
        </div></center>
            <center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
    </div>
    );
}

export default App;
