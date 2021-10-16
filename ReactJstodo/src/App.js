import './App.css';
import Headers from './Components/Headers';
import Todo from './Components/Todo';
import Fotter from './Components/Fotter';
import React,{useState} from 'react';
import { Todoform } from './Components/Todoform';
function App() {
  const onDelete = (todo) =>{
      settodos(todos.filter((e)=>{
           return e!==todo;
      }));
  }
  const addTodo=(_title,_desc)=>{
    let no = 0;
    if(todos.length!==0)
    {
        no = todos[todos.length-1].sno;
    } 
      const Mytodo ={
        sno:no,
        title:_title,
        desc:_desc
      }
      settodos([...todos,Mytodo]);
    
  }
  const [todos,settodos] = useState([
  ]);
  return (
	  <>
      <Headers title="todo" searchbar={true}/>
      <Todoform addtodo={addTodo}/>
      <Todo iterator={todos} onDelete={onDelete}/>
      <Fotter/>
    </>
  );
}

export default App;
