import React,{Component} from 'react'

export default class EvenAndOdd extends Component{
    constructor() {
        super()
        this.state ={
            evenArray:[],
            oddArray:[],
            userInput:''
        }

    }

    userInputHandler(e){
        this.setState({
            userInput:e.target.value
        })
        console.log(this.state.userInput);
    }

    evenOddArrayPush(input){
        var emptyArr = [];
        var evens = [];
        var odds = [];
        emptyArr = input.split(',');

        for(let i = 0; i < emptyArr.length;i++){
            if(emptyArr[i] % 2 === 0){
                evens.push(emptyArr[i]);
            }else{
                odds.push(emptyArr[i]);
            }
        }
        console.log("evens"+evens);
        console.log("odds"+odds);
        this.setState({ evenArray: evens, oddArray: odds });
    }


    render(){
        return <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input onChange={(e)=>this.userInputHandler(e)} className="inputLine" />
            <button  onClick={()=>this.evenOddArrayPush(this.state.userInput)} className="confirmationButton" >Split</button>
            <span className="resultsBox" >Evens:{JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox" >Odds:{JSON.stringify(this.state.oddArray)}</span>
          </div>;
    }



}


