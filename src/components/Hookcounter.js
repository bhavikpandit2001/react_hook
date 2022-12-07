import React from "react";
import { useState } from "react";
function Hookcounter(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <h2>hook in function</h2>
            <button type="button" onClick={() => setCount(count + 1)}>count :{count}</button>
        </div>
    )
}
export default Hookcounter;