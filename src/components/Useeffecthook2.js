import React from "react";
import { useState, useEffect } from "react";
function UseeffectHook2 (){
    const [x, setX] =  useState(0)
    const [y, setY] = useState(0)
    const logmousePosition = (e) => {
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("use effect called")
        // window.addEventListener('mousemove', logmousePosition)
    })
    return(
        <div>
            <h2>use effecthook at only once</h2>
            {/* <p>hooks: X - {x} Y - {y}</p> */}
        </div>


       
    )
}
export default UseeffectHook2;