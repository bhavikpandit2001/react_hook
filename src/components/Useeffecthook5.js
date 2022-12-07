import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UseeffectHook5(){
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idfrombtnclick, Setidfrombtnclick] = useState(1)
    const Click = () =>[
        Setidfrombtnclick(id)
    ]
    useEffect (() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombtnclick}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [idfrombtnclick])
    return(
        <div>
            <h2>data fetching using use effect hook</h2>
            <input type="text" value={id} onChange= {e => setId(e.target.value)}></input>
            <button type="btn" onClick={Click}>click</button>
            <div>{post.title}</div>
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