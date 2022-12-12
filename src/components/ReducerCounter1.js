import React from "react";
import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' : 
            return initialState
        default :
            return state
    }
    
}
function ReducerCounter1(){
    const [count , dispatch] = useReducer(reducer, initialState)
    console.log(count)
    return(
        <div>
            <h2>introduction of reducer counter</h2>
            <div>count : {count}</div>
            <button onClick={e => dispatch('increment')}>increment </button>
            <button onClick={e => dispatch('decrement')}>decrement </button>
            <button onClick={e => dispatch('reset')}>reset </button>
        </div>
    )
}
export default ReducerCounter1;