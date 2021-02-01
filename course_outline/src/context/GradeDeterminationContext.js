import React, { useState,createContext } from 'react';
import {v4 as uuidv4 } from 'uuid';

export const GradeDeterminationContext = createContext();

export const GradeDeterminationProvider = (props) =>{
    const[inputFields, setInputFields] = useState([
        {id: uuidv4(),
            weight: '',
            items: '',
            outcomes:'',
        }
    ]);

    return(
        <GradeDeterminationContext.Provider value = {[inputFields, setInputFields]}>
            {props.children};
        </GradeDeterminationContext.Provider>
    )
}