import React from "react";
import { useContext } from "react";
import {Usercontext, Channelcontext } from '/App.js'
//import CompC from "./CompC";

function CompB(){
    const user = useContext(Usercontext)
    const channel = useContext(Channelcontext)
    return(
        <div>
            <h2>
                {user} - {channel}
            </h2>
        </div>
    )
}
export default CompB;