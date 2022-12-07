import React from "react";
import { useState, useEffect } from "react";
function UseeffectHook4(){
    const [count, setCount] = useState(0)
    const tick =() =>{
        setCount (prevcount => prevcount+1)

    }
    useEffect(() =>{
        const interval = setInterval(tick, 1000)
        return () =>{
            clearInterval(interval)
        }
    }, [count])
    return(
        <div>
            <h2> interval use effect</h2>
            {count}
        </div>
    )
}
export default UseeffectHook4;