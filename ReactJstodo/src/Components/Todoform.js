import React,{useState} from 'react';
import './Todoform.css';
export const Todoform = ({addtodo}) => {

    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("error");
            return ;
        }
        addtodo(title,desc);
    }
    return (
        <div className="container" id="cntr">
            <h3>Enter New List</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                     <label for="title">To do title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" placeholder="To do Title"/>
                    
                </div>
                <div class="mb-3">
                    <label for="desc">To Do Desciption</label>
                    <input type="text" value={desc} class="form-control" id="desc" onChange={(e)=>{setDesc(e.target.value)}}  placeholder="desciption"/>
                </div>
                <button type="submit" class="btn btn-success" id="btnn">Submit</button>
            </form>
        </div>
    )
}
