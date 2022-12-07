import React from "react";
import { useState, useEffect } from "react";
function UseeffectHook(){
    const [count, setCount] = useState(0)
    const [Name, setName] = useState('')
    console.log(Name)
    useEffect(() => {
        console.log(`you clicked ${count}`)
        //console.log(Name)
    })
    return(
        <div>
            <h2> use effect hook count : {count}</h2>
            <input type="text" value={Name} onChange={e =>setName(e.target.value)}></input><br></br>
            <button type="btn" onClick={() => setCount(count + 1)}>click: {count}</button>
        </div>
        
    )
}
export default UseeffectHook;