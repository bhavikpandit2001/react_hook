import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UseeffectHook5(){
    const [users, setUser] = useState({})
    const [id, setId] = useState(1)
    const [idfrombtnclick, Setidfrombtnclick] = useState(1)
    const Click = () =>[
        Setidfrombtnclick(id)
    ]
    useEffect (() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${idfrombtnclick}`)
        .then(res => {
            console.log(res.data)
            setUser(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [idfrombtnclick])
    return(
        <div>
            <h2>data fetching using use effect hook</h2>
            <input type="text" value={id} onChange= {e => setId(e.target.value)}></input>
            <button type="btn" onClick={Click}>click</button>
            <h3>user: {users.name} {users.address}</h3>
            {/* <ul>
                {
                    post.map(post =>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}
export default UseeffectHook5;