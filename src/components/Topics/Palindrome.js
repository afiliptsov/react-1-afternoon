import React,{Component} from 'react'

export default class Palindrome extends Component{
        constructor(){
            super()
            this.state={
                userInput:"",
                palindrome:""
            }


        }

        onChangeHandler(e){
            this.setState({
                userInput: e.target.value
            })
            console.log(this.state.userInput)
        }

        palindromeChecker(prop){
            let input = this.state.userInput;
            let reversedString;
            let answer;
            reversedString = input.split('').reverse().join('')
            if(input === reversedString){
                this.setState({ palindrome: "true" });
            }else{
                this.setState({ palindrome: "false" });
            }
        }


    render() {

        return(
            <div className="puzzleBox filterStringPB">
                <p>Palindrome</p>
                <input onChange={(e)=>this.onChangeHandler(e)} className="inputLine"></input>
                <button onClick= {()=>this.palindromeChecker(this.state.userInput)} className="confirmationButton">Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}