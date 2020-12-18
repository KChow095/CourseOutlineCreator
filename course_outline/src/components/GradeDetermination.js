import React, { useState }from 'react';
import "bulma/css/bulma.css";
import { v4 as uuidv4 } from 'uuid';

function GradeDetermination(){

    const[inputFields, setInputFields] = useState([
        {id: uuidv4(), weight: '' , item:'', outcomes:''},
    ]);

    const handleChangeInput = (id, event) => {
        console.log(id, event.target.name);
    }

    const handleChangeWeight = (id, event)=>{
        const newInputFields = inputFields.map(i => {
            if(id === i.id) {
              i[event.target.name] = event.target.value;
            }
            return i;
        })
        setInputFields(newInputFields);
    }
    const handleAddFields=()=>{
        setInputFields([...inputFields,{id: uuidv4(), weight:'',item:'',outcomes:''}]);
    }
    
    const handleDeleteFields =(id)=>{
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return(
        <div clasName = "field">
           <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Grade Determination</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <div className="columns">
                                <div className = "column is-two-fifths">
                                    <label class="label">Item</label>
                                </div>
                                <div className = "column is-one-fifth">
                                    <label class="label">Components Evaluated</label>
                                </div>
                                <div className = "column is-one-fifth">
                                    <label class="label">Weight</label>
                                </div>
                            </div>
                            {inputFields.map((inputField, index)=> (
                                    <div key = {inputField.id}>
                                        <div className="columns">
                                        <div className = "column is-two-fifths">
                                            <input 
                                            className="input is-dark"
                                            name = "description" 
                                            type="text" 
                                            placeholder="eg. Assignments" 
                                            value = {inputField.item}
                                            onChange = {(event) =>handleChangeInput(inputField.id, event)}
                                            />
                                        </div>
                                        <div className = "column is-one-fifth">
                                            <input 
                                            className="input is-dark"
                                            name = "components" 
                                            type="text" 
                                            placeholder="eg. 1-3" 
                                            value = {inputField.outcomes}
                                            onChange = {(event) =>handleChangeInput(inputField.id, event)}
                                            />
                                        </div>
                                        <div className = "column is-one-fifth">
                                            <input 
                                            className="input is-dark"
                                            name = "weighting" 
                                            type="text" 
                                            placeholder="eg. 10%" 
                                            value = {inputField.weight}
                                            onChange = {(event) =>handleChangeWeight(inputField.id, event)}
                                            />
                                        </div>
                                        <div className = "column">
                                            <p className = "buttons">
                                                <button class="button is-warning" onClick ={() =>{
                                                    handleAddFields();
                                                    }}>
                                                    Add
                                                </button>
                                                <button class="button is-danger" 
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

export default GradeDetermination;