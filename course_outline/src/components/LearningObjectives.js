import React, { useState }from 'react';
import "bulma/css/bulma.css";
import { v4 as uuidv4 } from 'uuid';

function LearningObjectives(){

    const[objectiveNumber, setObjectiveNumeber] = useState(2)

    const[inputFields, setInputFields] = useState([
        {id: uuidv4(), learnNum: 1 , learnDesc:''},
    ]);

    const handleChangeNum = (id, event)=>{
        const newInputFields = inputFields.map(i => {
            if(id === i.id) {
              i[event.target.name] = event.target.value
            }
            return i;
        })
        setInputFields(newInputFields);
    }

    const handleChangeDesc = (id, event)=>{
        const newInputFields = inputFields.map(i => {
            if(id === i.id) {
              i[event.target.name] = event.target.value;
            }
            return i;
        })
        setInputFields(newInputFields);
    }
    const handleAddFields=()=>{
        setObjectiveNumeber(objectiveNumber+1);
        setInputFields([...inputFields,{id: uuidv4(), learnNum: objectiveNumber,learnDesc:''}]);
    }
    const handleDeleteFields =(id)=>{
        setObjectiveNumeber(objectiveNumber-1);
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return(
        <div className = "field">
           <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Learning Outcomes</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                        <div className="columns">
                                <div className = "column is-one-fifth">
                                    <label className="label">Component Number</label>
                                </div>
                                <div className = "column is-half">
                                    <label className="label">Component Description</label>
                                </div>
                            </div>
                            {inputFields.map((inputField, index)=> (
                                    <div key = {inputField.id}>
                                        <div className="columns">
                                        <div className = "column is-one-fifth">
                                            <input 
                                            className="input is-dark"
                                            name = "number" 
                                            type="text" 
                                            placeholder="Outcome Number" 
                                            value = {inputField.learnNum}
                                            onChange = {event =>handleChangeNum(inputField.id, event)}
                                            />
                                        </div>
                                        <div className = "column is-three-fifths">
                                            <input 
                                            className="input is-dark"
                                            name = "description" 
                                            type="text" 
                                            placeholder="Description" 
                                            value = {inputField.learnDesc}
                                            onChange = {event =>handleChangeDesc(inputField.id, event)}
                                            />
                                        </div>
                                        <div className = "column">
                                            <p className = "buttons">
                                                <button className="button is-warning" onClick ={() =>{
                                                    handleAddFields();
                                                    }}>
                                                    Add
                                                </button>
                                                <button className="button is-danger" 
                                                disabled = {inputFields.length===1}
                                                onClick = {() =>{
                                                    handleDeleteFields(inputField.id);
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

export default LearningObjectives;