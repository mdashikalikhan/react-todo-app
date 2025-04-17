export const TodoRowItem: React.FC<{
    rowSerial: number; 
    rowDescription: string; rowAssigned: string; 
    deleteTodo: Function
}> = (props) =>
{
    return (
        <tr onClick={()=>props.deleteTodo(props.rowSerial)}>
            <th scope='row'>{props.rowSerial}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    );
}

/* export default TodoRowItem; */