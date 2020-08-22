import React,{useContext, useState} from 'react';
import { Grid, Container, Typography, TextField, MenuItem, CssBaseline , Button } from '@material-ui/core';

function App() {

    const soil = [
        {
          value: 'Andy',
          label: 'Andy',
        },
        {
          value: 'Silt',
          label: 'Silt',
        },
        {
          value: 'Clay',
          label: 'Clay',
        },
        {
          value: 'Loamy',
          label: 'Loamy',
        },
      ];

const sunlight = [
    {
        value:'Direct',
        label: 'Direct'
    },
    {
        value:'Under Glass',
        label: 'Under Glass'
    },
    {
        value:'Windowsill',
        label: 'Windowsill'
    },
    {
        value:'Partial shade',
        label: 'Partial shade'
    },
    {
        value:'Full shade',
        label: 'Full shade'
    },
    ]
const cLevels = [
    {
        value:'Low',
        label: 'Low'
    },
    {
        value:'Medium',
        label: 'Medium'
    },
    {
        value:'High',
        label: 'High'
    }  
]

const climateChoices = [
    {
        value:'Hot',
        label: 'Hot (Metro Manila)'
    },
    {
        value:'Temperate',
        label: 'Temperate (Tagaytay)'
    },
    {
        value:'Cold',
        label: 'Cold (Baguio)'
    }  
]

const plantTypeChoices = [
    {
        value:'Organic',
        label: 'Organic'
    },
    {
        value:'Inorganic',
        label: 'Inorganic'
    } 
]

    var [soilType,setSoilType] = useState('Andy')
    var [area,setArea] = useState(0)
    var [sunlightType,setSunlightType] = useState('Direct')
    var [timeAvailable,setTimeAvailable] = useState(0)
    var [levelOfCommitment,setLevelOfCommitment] = useState('Low')
    var [climate,setClimate] = useState('Cold')
    var [budget,setBudget] = useState(0)
    var [plantType,setPlantType] = useState('Organic')
    var [showResult,setShowResult] = useState(false)
    return (
        <>
        <Grid container spacing={4}>
           {showResult ? (
            <>
           <Grid item xs={12}><h1>Optimal plants to sow</h1></Grid>
           <Grid item xs={12}><p>Lettuce <br/> Kale <br/> Basil</p></Grid>
           <Grid item xs={12}><h1>Materials needed</h1></Grid>
           <Grid item xs={12}><p>Hand trowel <br/>Pruning shears <br/>Spade <br/>Hoe <br/>Fork <br/>Shovel <br/>Rake</p></Grid>
           </>
           ): (
            <>
           <Grid item xs={12}>
            <Typography variant="h3">Start your urban gardening journey!</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                label="Enter area"
                value={area}
                onChange={(e)=>{setArea(e.target.value)}}
                ></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                style={{width:350}}
                id="soilType"
                select
                label="Select Soil Type"
                value={soilType}
                onChange={(e)=>{setSoilType(e.target.value)}}
                >
                {soil.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                style={{width:350}}
                id="sunlightLevel"
                select
                label="Select Sunlight Level"
                value={sunlightType}
                onChange={(e)=>{setSunlightType(e.target.value)}}
                >
                {sunlight.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                label="Enter Time Available (hrs/day)"
                value={timeAvailable}
                onChange={(e)=>{setTimeAvailable(e.target.value)}}
                ></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                style={{width:350}}
                id="lvlofc"
                select
                label="Select Level of Commitment"
                value={levelOfCommitment}
                onChange={(e)=>{setLevelOfCommitment(e.target.value)}}
                >
                {cLevels.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                style={{width:350}}
                id="climate"
                select
                label="Select Climate"
                value={climate}
                onChange={(e)=>{setClimate(e.target.value)}}
                >
                {climateChoices.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                label="Budget"
                value={budget}
                onChange={(e)=>{setBudget(e.target.value)}}
                ></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                style={{width:350}}
                id="plant type"
                select
                label="Select Plant Type"
                value={plantType}
                onChange={(e)=>{setPlantType(e.target.value)}}
                >
                {plantTypeChoices.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                    <Button onClick={()=>{
                        setSoilType('Andy')
                        setArea(0)
                        setSunlightType('Direct')
                        setTimeAvailable(0)
                        setLevelOfCommitment('Low')
                        setClimate('Cold')
                        setBudget(0)
                        setPlantType('Organic')
                    }
                    }>Reset</Button>
                    <Button onClick={()=>{setShowResult(true)}}>Submit</Button>

            </Grid>
            </>)}

    </Grid>

  

  </>
  
	

    );
}

export default App;
