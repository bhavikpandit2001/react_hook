import React from "react";
import { Channelcontext, Usercontext } from "../App";
function CompC(){
    return(
        <div>
            <h2>component c</h2>
            <Usercontext.Consumer>
                {
                    user =>{
                        return (
                            <Channelcontext.Consumer>
                                {
                                    channel => {
                                        return(
                                            <div> context value {user}, context channel :{channel}</div>
                                        )
                                    }
                                }
                            </Channelcontext.Consumer>
                        )
                }
            }
            </Usercontext.Consumer>
        </div>
    )
}
export default CompC;