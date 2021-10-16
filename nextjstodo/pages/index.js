import React,{useState} from 'react';
// import './Styles.css'
// import 'bootstrap/dist/css/bootstrap.css'

const index = () => {

  
  const[title, settitle] = useState('');
  const[desc,setdesc] = useState('');
  const[todoList, setTodoList] = useState([]);
    var t = 0;

    const  handledelete=(todo)=>{
       setTodoList(todoList.filter((e)=>{
           return e!==todo;
      }));
    }

  const handleSubmit = (e) => {
    e.preventDefault();
      if(!title || !desc)
      {
          alert("Empty List Cant Be Added");
          return ;
      }
      const addtodo={
          sno:t,
          tit:title,
          dsc:desc
      }
      setTodoList([...todoList,addtodo]);
      t+=1;
  };
  return (
    <div>
      <h3>Next Js To Do List</h3>
      <form>
        <input type="text"  placeholder="Enter the List Title" id = "list" onChange={(e)=>{settitle(e.target.value)}}/>
        <br/>
        <input type="text"  placeholder="Enter List Desciption" id="desc" onChange={(e)=>{setdesc(e.target.value)}}/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
        <div>
        <h3>To Do Js List Is</h3>
        {todoList.length >=1 ?
            todoList.map((todo)=>{
                return (
                    <>
                    <div className="container">
                        <h4>{todo.tit}</h4>
                        <p>{todo.dsc}</p>
                        <button key={todo.sno} onClick={(e)=>{
                            e.preventDefault();
                            handledelete(todo);
                        }} >Delete</button>
                        <hr />
                    </div>
                   </>
                );
            })
          : "Empty"
        }
        </div>
    </div>
  );
};
export default index;
