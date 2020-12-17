import React from 'react';
import "bulma/css/bulma.css";

function CourseName(){
    return(
        <div clasName = "field">
            <div class="field">
                <label class="label ">Instructor</label>
                <div class="control">
                    <input class="input is-primary" type="text" placeholder="Instructor Full Name" />
                </div>
            </div>
            <div class="field">
                <label class="label">Course Name</label>
                <div class="control">
                    <input class="input is-primary" type="text" placeholder="Course Name" />
                </div>
            </div>
        </div>
        );
}
export default CourseName;