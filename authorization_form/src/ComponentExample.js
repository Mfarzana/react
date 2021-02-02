import React from 'react'
import ReactDOM from 'react-dom'

class ComponentExample extends React.Component{
    constructor(){
        super();
        this.state={name:'test-name', password:'test253454'};
    }
    render(){
        const div=(
            <div>
                <h1>User Info</h1>
                <h3>Username: {this.state.name}</h3>
                <h3>password: {this.state.password}</h3>
            </div>
        );

        return div;
    }
}

export default ComponentExample