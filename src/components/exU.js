import React from "react";
import { useState, useEffect } from "react";
function ExU() {
    const [count, setCount] = useState(0)
    useEffect(() =>{
        console.log(`you clicked ${count}`);
        
    })
    

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>submit: {count}</button>
        </div>
    )
}
export default ExU;