import React ,{useState} from 'react'
import './App.css';
import Tolist from './Tolist'

const App =()=>{
  const[task ,setTask]=useState("");
  const[todos,setTodos]=useState([]);
  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");
    }
    const deleteHandler=(indexValue)=>{
      const newTodos=todos.filter((todo,index)=>index!==indexValue);
      setTodos(newTodos);
    }
  return(
     <div >
    <center>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">ToDo List Managment</h1>
               <form onSubmit={submitHandler}>
                <input type="text" name="tast"  value={task} onChange={changeHandler}></input> &nbsp;&nbsp;
                <input type="submit" value="Add" name="Add"></input>
               </form>
               <Tolist todolist={todos} deletehandler={deleteHandler}/>
        </div>
      </div>
    </center>
    </div>

  )
}
export  default App;

