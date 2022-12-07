import React, { useState } from "react";
function Hookcounter4() {
    const [items, setItem] = useState([])
    const AddItem = () => {
        setItem(...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        })
        console.log("item added")
    }
    return (
        <div>
            <h2>usestate hook with array</h2>
            <button type="btn" onClick={AddItem}>addnumber</button>
            <ul>
                {items.map(item =>
                (
                    <li key={item.id}>{item.value}</li>
                )
                )}
            </ul>
        </div>
    )
}
export default Hookcounter4;