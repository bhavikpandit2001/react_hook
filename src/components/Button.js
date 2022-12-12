import React from "react";
function Button(Click, children){
    console.log(`rendering `, children)
    return(
        <div>
            <button onClick={Click}>{children}</button>
        </div>
    )
} 
export default React.memo(Button);