import React from "react";
function title(){
    console.log("rendering title")
    return(
        <div>
            <h2>Use callback hook</h2>
        </div>
    )
}
export default React.memo(title);