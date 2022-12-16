import React from "react";
import { useState } from "react";

function Hookcounter3 (){
    const [name,setName] = useState({firstname: '', lastname: '',password: ''});
    const Click = () =>{
        console.log(name)
    }
    
    return(
        <div>
            <h2>usestate hook with object</h2>
            <label>firstname:</label>
            <input type='text' value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})}></input><br></br>
            <label>lastname</label>
            <input type='text' value={name.lastname} onChange={e => setName({...name, lastname: e.target.value})}></input><br></br>
            <label>password</label>
            <input type='password' value={name.password} onChange={e => setName({...name, password: e.target.value})}></input><br></br>
            <button type="btn" onClick={Click}>click</button>
        </div>
    )
}
export default Hookcounter3;