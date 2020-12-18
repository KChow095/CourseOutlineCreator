import React from 'react';
import "bulma/css/bulma.css";

function CourseInformation(){
    return(
        <div className="field">
          <div className="control">
          <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Course Information</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                          <div className = "columns">
                            <div className = "column is-four-fifths">
                              <textarea className="textarea is-dark" placeholder="Enter information regarding the course"></textarea>
                            </div>
                            <div className = "column">
                              <button className="button is-danger">
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