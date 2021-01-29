import React, { useState, createContext } from 'react';
import {v4 as uuidv4} from 'uuid';

export const LetterDeterminationContext = createContext();

export const LetterDeterminationProvider = (props)=>{
    const [letterRanges, setLetterRange] = useState([
        {id: uuidv4(), 
            letterGrade: '' , 
            upperPerc:'', 
            lowerPerc:''},
    ])
    return(
        <LetterDeterminationContext.Provider value = {[letterRanges, setLetterRange]}>
            {props.children};
        </LetterDeterminationContext.Provider>
    )
}