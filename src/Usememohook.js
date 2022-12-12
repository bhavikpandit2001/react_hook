import React from "react";
import { useState, useMemo } from "react";
function Usememohook() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const incrementOne = () => {
        return (
            setCounter1 (counter1 + 1)
        )
    }
    const incrementTwo = () => {
        return (
            setCounter2 (counter2 + 2)
        )
    }
    
    const isEven = useMemo(() => {
        let i = 0
        while( i <200000000) i++
        return(
            
            counter1 % 2 === 0
        )
    },[counter1])
    return (
        <div>
            <h2>Use memo hook</h2>
            <button onClick={incrementOne}>count: {counter1}</button>
            <span>{isEven ? "even" : "odd"}</span>
            <button onClick={incrementTwo}>count: {counter2}</button>
        </div>
    )
}
export default Usememohook