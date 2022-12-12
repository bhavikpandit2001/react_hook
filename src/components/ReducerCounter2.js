import React from "react";
import { useReducer } from "react";

const initialState = {
    firstCounter: 0
};
const reducer = (state, action) => {
    switch(action.type){
        case 'increment' :
            return {firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {firstCounter: state.firstCounter - action.value}
        case 'reset' : 
            return initialState
        default :
            return state
    }
}
function ReducerCounter2(){
    const [count , dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <h2>introduction of reducer counter</h2>
            <div>count : {count.firstCounter}</div>
            <button onClick={e => dispatch({type: 'increment', value: 1})}> increment </button>
            <button onClick={e => dispatch({type: 'decrement', value: 1})}>decrement </button>
            <button onClick={e => dispatch({type: 'increment', value: 5})}> increment 5</button>
            <button onClick={e => dispatch({type: 'decrement', value: 5})}>decrement 5</button>
            <button onClick={e => dispatch({type: 'reset'})}>reset </button>
        </div>
    )
}
export default ReducerCounter2;