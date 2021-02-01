import React, { useContext } from 'react';
import {CourseInformationContext} from '../context/CourseInformationContext.js'
import "bulma/css/bulma.css";

function CourseInformation(){
  const [inputField,setInputField] = useContext(CourseInformationContext);

  return(
      <div className="field">
        <div className="control">
        <div className="field is-horizontal">
              <div className="field-label is-normal">
                  <label className="label">Course Information</label>
              </div>
              <div className="field-body">
                  <div className="field">
                      <div className="control">
                        <div className = "columns">
                          <div className = "column is-four-fifths">
                            <textarea className="textarea is-dark" 
                            placeholder="Enter information regarding the course"
                            value = {inputField}
                            onChange = {(event) =>setInputField(event.target.value)}
                            ></textarea>
                          </div>
                          <div className = "column">
                            <button 
                            className="button is-danger"
                            onClick = {() =>{
                              setInputField('');
                              }}>
                              <span>Clear Course Information</span>
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
  );
}
export default CourseInformation;