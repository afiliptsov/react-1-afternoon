import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state = { unFilteredArray: [{ "name": "Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" }],
        userInput : "",
        filteredArray:[]
    };
    }

handleOnChange(e){
    this.setState({
        userInput: e.target.value
    })
}

filterArrayMethod(prop){
var employees = this.state.unFilteredArray;
var filteredEmployees = [];

for(let i = 0; i< employees.length; i++){
    if(employees[i].hasOwnProperty(prop)){
        filteredEmployees.push(employees[i]);
    }
}
    this.setState({ filteredArray: filteredEmployees});
}



    render() {
        return (
            <div className="puzzleBox filterObjectPB" >
            <h4> FilterObject Component</h4>
                <span className="puzzleText">Unfiltered:{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input onChange={(e) =>this.handleOnChange(e)} className="inputLine"></input>
                <button onClick={() => this.filterArrayMethod(this.state.userInput)} className="confirmationButton">Filter</button>
                <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}


