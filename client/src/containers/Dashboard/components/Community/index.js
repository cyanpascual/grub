import React,{useContext} from 'react';
import '../../../../assets/index.css';
import Member from './components/Member'
function App() {
    return (
        <div>
            <body>
                <div class="wrapper1">
                    <h3>Community <br/> Plantitas of UP Diliman</h3>
                    <h2>Location: Brgy: UP Campus, Quezon City</h2>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
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
