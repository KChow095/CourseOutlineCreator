import React, { Component } from 'react';

class gradeDetermination extends Component {
    state = {  }
    render() { 
        return ( <input type = "text" 
        value = {this.state.value} 
        onChange = {this.handleChange}
        />  );
    }
}
 
export default gradeDetermination;