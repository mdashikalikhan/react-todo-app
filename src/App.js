import logo from './logo.svg';
import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    {rowSerial:1, rowDescription: 'Description 1', rowAssigned: 'Assigned 1'},
    {rowSerial:2, rowDescription: 'Description 2', rowAssigned: 'Assigned 2'},
    {rowSerial:3, rowDescription: 'Description 3', rowAssigned: 'Assigned 3'},
    {rowSerial:4, rowDescription: 'Description 4', rowAssigned: 'Assigned 4'}
  ];
  return (
    <div className='mt-5 container'>

      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos}/>
        </div>
      </div>

    </div>
  );
}

export default App;
