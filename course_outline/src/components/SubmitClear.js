import React from 'react';
import "bulma/css/bulma.css";

function SubmitClear(){
    return(
        <div className="columns">
            <div className = "column is-two-fifths"/>
            <div className = "column">
                <div className="buttons">
                    <button className="button is-warning">Create Outline</button>
                    <button className="button is-danger">Clear All</button>
                </div>
            </div>
        </div>
        );
}
export default SubmitClear;