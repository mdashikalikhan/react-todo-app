import logo from './logo.svg';
import TodoTable from './components/TodoTable';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {rowSerial:1, rowDescription: 'Description 1', rowAssigned: 'Assigned 1'},
    {rowSerial:2, rowDescription: 'Description 2', rowAssigned: 'Assigned 2'},
    {rowSerial:3, rowDescription: 'Description 3', rowAssigned: 'Assigned 3'},
    {rowSerial:4, rowDescription: 'Description 4', rowAssigned: 'Assigned 4'}
  ]);

  const addTodo = ()=>{
    /* console.log('todo button has been clicked!'); */
    let sl = 1
    if(todos.length>0){
      sl = todos.length + 1;
    }
    const newTodo = {
      rowSerial:sl, rowDescription: 'Description ' + sl, rowAssigned: 'Assigned ' + sl
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className='mt-5 container'>

      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={()=>{addTodo()}}>
            Add new todo
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
