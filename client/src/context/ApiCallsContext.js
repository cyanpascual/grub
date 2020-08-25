import React, { createContext, useState, useEffect } from 'react';
import app from "../fire.js"
import {Route} from 'react-router-dom'
import app from '../fire'

export const ApiCallsContext = createContext();

const ApiCallsContextProvider = (props) => {

    // const CurrentUserDataGetter = () =>{
    //     var starCountRef = app.database().ref('posts/' + postId + '/starCount');
    //     starCountRef.on('value', function(snapshot) {
    //     updateStarCount(postElement, snapshot.val());
    //     });
    }

    return(
        <ApiCallsContext.Provider value={{

            }}>
            {props.children}
        </ApiCallsContext.Provider>
    );
}

export default ApiCallsContextProvider;