import React from 'react';
import "bulma/css/bulma.css";

function CourseName(){
    return(
        <div clasName = "field">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Course Instructor</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input is-dark" type="text" placeholder="eg. Mohammad Moshirpour"/>
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
                            <input className="input is-dark" type="text" placeholder="eg. ENSF 409 Principles of Software Development"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default CourseName;