import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const LearningObjectivesContext = createContext();

export const LearningObjectivesProvider = (props) =>{
    const[inputFields, setInputFields] = useState([
        {id: uuidv4(), 
            learnNum: 1 , 
            learnDesc:''},
    ]);
    return(
        <LearningObjectivesContext.Provider value = {[inputFields, setInputFields]}>
            {props.children};
        </LearningObjectivesContext.Provider>
    );
}