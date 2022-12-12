import React from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";

const initialstate = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                eror: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: "something went wrong"
            }
        default:
            return{
                state
            }
    }
}

function FetchingReduce() {
    const[state, dispatch] = useReducer(reducer, initialstate)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
        }).catch(error => {
            dispatch({type: 'FETCH_ERROR', payload: error})
        })
    }, [])
    return (
        <div>
            <h2>fetching using Reducer</h2>
            {state.loading ? "loading" : state.post.title }
            {state.error ? state.error : null}
        </div>
    )
}
export default FetchingReduce;