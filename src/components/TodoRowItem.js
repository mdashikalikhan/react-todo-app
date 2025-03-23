function TodoRowItem(props){
    return (
        <tr>
            <th scope='row'>{props.rowSerial}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    );
}

export default TodoRowItem;