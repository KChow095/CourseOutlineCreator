import React, { useState, createContext } from 'react';

export const CourseNameContext = createContext();

export const CourseNameProvider = (props) =>{
    const[instructor,setInstructor] = useState("");
    const[courseName,setCourseName] = useState("");
    const[version,setVersion] = useState("");

    return(
        <CourseNameContext.Provider value = {{cInstructor: [instructor, setInstructor],cName: [courseName, setCourseName], cVersion: [version,setVersion]}}>
            {props.children};
        </CourseNameContext.Provider>
    )
}