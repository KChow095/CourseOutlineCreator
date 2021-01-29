import React, { useState, createContext } from 'react';

export const CourseInformationContext = createContext();

export const CourseInformationProvider =(props)=>{
    const[inputField,setInputField] = useState("");
    return(
        <CourseInformationContext.Provider value = {[inputField, setInputField]}>
            {props.children};
        </CourseInformationContext.Provider>
    );
}