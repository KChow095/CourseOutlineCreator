import React, { useContext } from 'react';
import "bulma/css/bulma.css";
import {CourseNameContext} from '../context/CourseNameContext.js';

function CourseName(){
    const {cInstructor, cName, cVersion} = useContext(CourseNameContext);
    const[instructor,setInstructor] = cInstructor;
    const[courseName,setCourseName] = cName;
    const[version,setVersion] = cVersion;

    return(
        <div className = "field">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Course Instructor</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input is-dark" 
                            type="text" 
                            placeholder="eg. Mohammad Moshirpour"
                            value = {instructor}
                            onChange = {(event) =>setInstructor(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Course Name</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input is-dark" 
                            type="text" 
                            placeholder="eg. ENSF 409 Principles of Software Development"
                            value = {courseName}
                            onChange = {(event) =>setCourseName(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Outline Version</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input is-dark" 
                            type="text" 
                            placeholder="eg. 1.2"
                            value = {version}
                            onChange = {(event) =>setVersion(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button className = "button is-warning"
                /*onClick ={}}*/>
                <span>Retrieve Previous Version</span>
            </button>
        </div>
        );
}
export default CourseName;