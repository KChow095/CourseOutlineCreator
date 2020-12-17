import React from 'react';
import "bulma/css/bulma.css";

function CourseInformation(){
    return(
        <div className="field">
          <div className="control">
            <label className="label">Course Information</label>
            <textarea className="textarea is-primary" placeholder="Enter information regarding the course"></textarea>
          </div>
          <div className="field is-grouped">
            <div className="clearbutton">
                <button className="button is-link is-light">Clear</button>
            </div>
          </div>
        </div>
        );
}
export default CourseInformation;