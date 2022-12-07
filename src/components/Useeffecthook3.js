import React, { useState } from "react";
// import UseeffectHook2 from "./Useeffecthook2";
function Useeffecthook3(){
    const [display, setDisplay] = useState(true)
    return(
        <div>
            <h2>use effect with cleanup</h2>

            <button onClick={() => setDisplay(!display)}>toggle display</button>
            {/* {display && <UseeffectHook2/>} */}
        </div>
        
    )
}
export default Useeffecthook3;