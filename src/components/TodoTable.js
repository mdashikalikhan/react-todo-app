
import TodoRowItem from "./TodoRowItem";

function TodoTable({todos}){
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo)=>(
                        <TodoRowItem key={todo.rowSerial} rowSerial={todo.rowSerial}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned} deleteTodo={todos.deleteTodo}/>
                    ))
                }
                
            </tbody>
        </table>
    );
}

export default TodoTable;