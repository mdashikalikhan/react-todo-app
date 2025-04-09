import logo from './logo.svg';
import TodoTable from './components/TodoTable';
import { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';


function App() {
  const [todos, setTodos] = useState([
    {rowSerial:1, rowDescription: 'Description 1', rowAssigned: 'Assigned 1'},
    {rowSerial:2, rowDescription: 'Description 2', rowAssigned: 'Assigned 2'},
    {rowSerial:3, rowDescription: 'Description 3', rowAssigned: 'Assigned 3'},
    {rowSerial:4, rowDescription: 'Description 4', rowAssigned: 'Assigned 4'}
  ]);

  const addTodo = (assigned, description)=>{
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

  const deleteTodo = (rowNum)=>{
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
          <button className='btn btn-primary'>
            Add new todo
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>

    </div>
  );
}

export default App;
