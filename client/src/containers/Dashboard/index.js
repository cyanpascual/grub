import React,{useContext, useState} from 'react';
import '../../assets/index.css';
import { LoginContext } from '../../context/LoginContext';
import Community from './components/Community'
import Plants from './components/Plants'
import Start from './components/Start'
import PremiumPlans from './components/PremiumPlans'

function App() {
    const {setAuthed,authed, username, password, setUsername,setPassword} = useContext(LoginContext);
    const [page,setPage] = useState('Start')
    return (
        <div>
        <center>
        <div id="content">
        <section class="sidebar2"> 
          <div id="menubar">
            <nav class="menu-mk">
              <h2>My Dashboard </h2>
              <hr/>
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
                <li><a onClick={(e)=>{
                  
                    setPage('PremiumPlans') 
                    }}>Premium Plans</a></li>
              </ul>
            </nav>
    
          </div>
        </section>
                {page==='Start'?(<Start/>):null}
                {page==='Plants'?(<Plants/>):null}
                {page==='Community'?(<Community/>):null}
                {page==='PremiumPlans'?(<PremiumPlans/>):null}
        
        </div></center>
            <center><div class="copyright">&copy;2020 - <strong>MILK TEAM</strong></div></center>
    </div>
    );
}

export default App;
