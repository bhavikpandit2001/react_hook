import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function ReducerCounter4(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            setLoading(false);
            setPost(res.data)
            setError('')
        }).catch(error => {
            setLoading(false);
            setPost({error})
            setError("something went wrong")
        })
    }, [])
    return(
        <div>
            <h2>fetching data with useReducer hook</h2>
            <p>
            {loading ? "loading" : post.title }
            {error ? error : null}
            </p>
        </div>
    )
}
export default ReducerCounter4;