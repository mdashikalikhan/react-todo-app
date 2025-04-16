function TodoRowItem(props){
    return (
        <tr onClick={()=>props.deleteTodo(props.rowSerial)}>
            <th scope='row'>{props.rowSerial}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    );
}

export default TodoRowItem;