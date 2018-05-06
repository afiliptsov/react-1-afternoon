import React,{Component} from 'react'

export default class Sum extends Component{
    constructor(){
        super()
        this.state={
            number1:0,
            number2:0,
            sum: null
        }
    }


onChangeHandlerOne(e){
    this.setState({
        number1: parseInt(e.target.value,10)
    })
}
    onChangeHandlerTwo(e) {
        this.setState({
            number2: parseInt(e.target.value,10)
        })
    }

setSum(val1,val2){
    this.setState({
        sum:  val1+val2
    })

}

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={(e)=>this.onChangeHandlerOne(e)} className="inputLine"></input>
                <input onChange={(e)=>this.onChangeHandlerTwo(e)} className="inputLine"></input>
                <button onClick={()=>this.setSum(this.state.number1,this.state.number2)} className="confirmationButton">Add</button>
                <span className="resultsBox">Total: {this.state.sum}</span>
            </div>
        )
    }
}