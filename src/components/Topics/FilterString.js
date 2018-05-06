import React,{Component} from 'react'

export default class FilterString extends Component{
    constructor(){
        super()
        this.state={
            unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
            userInput:"",
            filteredArray:[]
        }
    }

    onChangeHandler(e){
        this.setState({
            userInput:e.target.value
        })
        console.log(this.state.userInput);
    }

    filterString(prop){
        let namesArr = this.state.unFilteredArray;
        let namesFiltered = [];
        for(let i =0; i<namesArr.length; i++){
            if(namesArr[i].includes(prop)){
                namesFiltered.push(namesArr[i]);
            }
            this.setState({
                filteredArray:namesFiltered
            })
        }
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered:{JSON.stringify( this.state.unFilteredArray,10,null)}</span>
                <input onChange={(e)=>this.onChangeHandler(e)} className="inputLine"></input>
                <button onClick={()=>this.filterString(this.state.userInput)} className="confirmationButton">Filter</button>
                <span className="resultsBox filterStringRB">Filtered:{JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

