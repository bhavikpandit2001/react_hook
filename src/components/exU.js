import React from "react";
import { useState, useEffect } from "react";
function ExU() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState({firstname:'', lastname:'' , password:''})
    const [items, setItems] = useState([])
    useEffect(() =>{
        console.log(`you clicked ${count}`);

    })
    const addItem = () =>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 5) + 1
        }])
        console.log("item added")
    }

    const Click = () => {
        console.log(name);
    }
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>submit: {count}</button>
            <button onClick={addItem}>add a number</button>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>{item.value}</li>
                )
                )}
            </ul>
            <form>
                <label>First name:</label>
                <input type="text" value={name.firstname} onChange={e => setName({...name, firstname: e.target.value}) }/><br></br>
                <label>Last name:</label>
                <input type="text" value={name.lastname} onChange={e => setName({...name, lastname: e.target.value})}/><br></br>
                <label>Password:</label>
                <input type="password" value={name.password} onChange={e => setName({...name, password: e.target.value})}></input>
                <button type="button" onClick={Click}>login</button>
            </form>
        </div>
    )
}
export default ExU;