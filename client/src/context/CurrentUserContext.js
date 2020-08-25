import React, { createContext, useState, useEffect } from 'react';
import app from "../fire.js"
import {Route} from 'react-router-dom'
export const CurrentUserContext = createContext();

const CurrentUserContextProvider = (props) => {
    const [email,setEmail] =  useState('')
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [planting_experience,setPlanting_experience] = useState('')
    const [plants,setPlants] = useState('')
    const [interested_in,setInterested_in] = useState('')
    const [member_since,setMember_since] = useState('')
    const [badges,setBadges] = useState([])
    const [postIDs,setPostIDs] = useState([])
    const [image,setImage] = useState(null)
    const [community,setCommunity] = useState('')

  return(
    <CurrentUserContext.Provider value={{
        email,setEmail,
        name,setName,
        description,setDescription,
        planting_experience,setPlanting_experience,
        plants,setPlants,
        interested_in,setInterested_in,
        member_since,setMember_since,
        badges,setBadges,
        postIDs,setPostIDs,
        image,setImage,
        community,setCommunity
     }}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContextProvider;