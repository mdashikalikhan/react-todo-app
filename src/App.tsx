import {TodoTable} from './components/TodoTable';
import { useState } from 'react';
import {NewTodoForm} from './components/NewTodoForm';
import React from 'react';


export const App = ()=> {
  const [todos, setTodos] = useState([
    {rowSerial:1, rowDescription: 'Description 1', rowAssigned: 'Assigned 1'},
    {rowSerial:2, rowDescription: 'Description 2', rowAssigned: 'Assigned 2'},
    {rowSerial:3, rowDescription: 'Description 3', rowAssigned: 'Assigned 3'},
    {rowSerial:4, rowDescription: 'Description 4', rowAssigned: 'Assigned 4'}
  ]);

  const [showTodoForm, setShowTodoForm]=useState(false);

  const addTodo = (assigned: string, description: string)=>{
    /* console.log('todo button has been clicked!'); */
    let sl = 1
    if(todos.length>0){
      sl = todos[todos.length-1].rowSerial + 1;
    }
    const newTodo = {
      rowSerial:sl, rowDescription: description, rowAssigned: assigned
    };

    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (rowNum: number)=>{
    let filtered = todos.filter(
      function(val){
        return val.rowSerial!==rowNum;
      }
    );
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>

      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          {/* <button className='btn btn-primary' onClick={()=>{addTodo()}}> */}
          <button className='btn btn-primary' onClick={()=>setShowTodoForm(!showTodoForm)}>
            {!showTodoForm? 'Add new todo' : 'Hide todo'}
          </button>
          {showTodoForm && <NewTodoForm addTodo={addTodo}/>}
        </div>
      </div>

    </div>
  );
}

/* export default App; */
