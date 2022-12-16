import React, { useState } from "react";
function Hookcounter2(){
    const initialcount = 0
    const [count,setCount] = useState(initialcount)
    const incrementfive = () =>{
        for(let i= 0; i<5; i++){
            setCount(prevCount => prevCount+1)
            
        }
        
    }
    const decrementFive = () =>{
        for(let j = 0; j<5; j ++){
            setCount(prevCount => prevCount - 1)
        }
        
    }
    return(
        <div>
            <h2>usestate hook with previous hook</h2>
            count: {count}
            <button type="button" onClick={() => setCount(initialcount)}>reset</button>
            <button type="button" onClick={() => setCount(prevCount => prevCount+1)}>increment</button>
            <button type="button" onClick={() => setCount(prevCount => prevCount-1)}>decrement</button>
            <button onClick={incrementfive}>increment5</button>
            <button onClick={decrementFive}>decrement5</button>
        </div>
    )
}
export default Hookcounter2;