
import TodoRowItem from "./TodoRowItem";

function TodoTable(){
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Assigned</th>
                </tr>
            </thead>
            <tbody>
                <TodoRowItem/>
            </tbody>
        </table>
    );
}

export default TodoTable();