import React from "react";
import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerCounter3() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>introduction of reducer counter</h2>
            <div>count : {count}
                <button onClick={e => dispatch('increment')}>increment </button>
                <button onClick={e => dispatch('decrement')}>decrement </button>
                <button onClick={e => dispatch('reset')}>reset </button>
            </div>

            <div>
                <div>count2 : {count2}</div>
                <button onClick={e => dispatch2('increment')}>increment </button>
                <button onClick={e => dispatch2('decrement')}>decrement </button>
                <button onClick={e => dispatch2('reset')}>reset </button>
            </div>
        </div>
    )
}
export default ReducerCounter3;