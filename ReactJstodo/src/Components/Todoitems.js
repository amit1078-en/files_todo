import React from 'react'

export default function Todoitems({todos,key,onDelete}) {
    return (
        <div className="center">
            <h4 className="container">{todos.title}</h4>
            <p className="container">{todos.desc}</p>
            <button className="container btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
        </div>
    )
}
