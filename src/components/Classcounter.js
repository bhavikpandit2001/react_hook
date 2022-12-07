
import React, { Component } from "react";
 class Classcounter extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    Count = () =>{
        this.setState({
            count: this.state.count + 1
    })
    }
    render(){
        return(
            <button type="button" onClick={this.Count}>count {this.state.count}</button>)
    }
 }
 export default Classcounter;