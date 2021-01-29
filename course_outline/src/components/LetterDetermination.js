import React, { useContext }from 'react';
import "bulma/css/bulma.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons'
import { LetterDeterminationContext } from '../context/LetterDeterminationContext';
import {v4 as uuidv4} from 'uuid';

function LetterDetermination(){
    const [letterRanges, setLetterRange] = useContext(LetterDeterminationContext);

    const handleChangeEvent =(id, event) =>{
        const newRange = letterRanges.map(i =>{
            if(id===i.id){
                i[event.target.name] = event.target.value;
            }
            return i;
        })
        setLetterRange(newRange);
    }

    const handleNewRange =()=>{
        setLetterRange([...letterRanges,{id: uuidv4(),LetterGrade: '', UpperPerc: '', LowerPerc: '' }]);
    }

    const handleDeleteRange =(id)=>{
        const values = [...letterRanges];
        const deletedIndex = values.findIndex(value => value.id === id);
        values.splice(deletedIndex, 1);
        setLetterRange(values);
    }

    return(
        <div className = "field">
           <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Letter Grade Ranges</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <div className="columns">
                                <div className = "column is-one-fifth">
                                    <label className="label">Letter Grade</label>
                                </div>
                                <div className = "column is-one-fifth">
                                    <label className="label">Upper Limit (%)</label>
                                </div>
                                <div className = "column is-one-fifth">
                                </div>
                                <div className = "column is-one-fifth">
                                    <label className="label">Lower Limit (%)</label>
                                </div>
                            </div>
                            {letterRanges.map(letterRange=> (
                                    <div key = {letterRange.id}>
                                        <div className="columns">
                                        <div className = "column is-one-fifth">
                                            <input 
                                            className="input is-dark"
                                            name = "letterGrade" 
                                            type="text" 
                                            placeholder="eg. A+" 
                                            value = {letterRange.letterGrade}
                                            onChange = {(event) =>handleChangeEvent(letterRange.id, event)}
                                            />
                                        </div>
                                        <div className = "column is-one-fifth">
                                            <input 
                                            className="input is-dark"
                                            name = "upperPerc" 
                                            type="text" 
                                            placeholder="eg. 90" 
                                            value = {letterRange.upperPerc}
                                            onChange = {(event) =>handleChangeEvent(letterRange.id, event)}
                                            />
                                        </div>
                                        <div className = "column is-one-fifth">
                                            <FontAwesomeIcon icon={faGreaterThanEqual} />
                                        </div>
                                        <div className = "column is-one-fifth">
                                            <input 
                                            className="input is-dark"
                                            name = "lowerPerc" 
                                            type="text" 
                                            placeholder="eg. 80" 
                                            value = {letterRange.lowerPerc}
                                            onChange = {(event) =>handleChangeEvent(letterRange.id, event)}
                                            />
                                        </div>
                                        <div className = "column">
                                            <p className = "buttons">
                                                <button className="button is-warning" onClick ={() =>{
                                                    handleNewRange();
                                                    }}>
                                                    Add
                                                </button>
                                                <button className="button is-danger" 
                                                disabled = {letterRanges.length===1}
                                                onClick = {() =>{
                                                    handleDeleteRange(letterRange.id);
                                                }}>
                                                    Delete
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LetterDetermination;