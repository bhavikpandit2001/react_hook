import React from "react";
import { useEffect, useRef } from "react";
function FocusInput(){

    const inputRef = useRef(null)
    useEffect(() =>{
        inputRef.current.focus()
    }, [])
    return(
        <div>
            <h2>Useref hook</h2>
            <input ref={inputRef} type="text"/>
        </div>
    )
}
export default FocusInput