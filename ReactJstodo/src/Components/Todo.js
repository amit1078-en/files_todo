import React from 'react'
import Todoitems from './Todoitems';
import './Todo.css'
export default function Todo(props) {
    return (
        <div className="container" id="cntrs">
             <>
             <h3>List Pending</h3>

             {props.iterator.length===0?"nothing to display":
             props.iterator.map((todo)=>{
                return (
                    <>
                    <Todoitems todos={todo} key={todo.sno} onDelete={props.onDelete}/>
                    <hr/>
                    </>
                )
             })
             };
             </>
        </div>
    )
}
