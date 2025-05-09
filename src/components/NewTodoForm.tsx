import React from "react";

import { useState } from "react";

export const  NewTodoForm: React.FC<{addTodo: Function}> = (props)=>{

    const [assigned, setAssigned] = useState('');

    const [description, setDescription] = useState('');

    const submitTodo = ()=>{
        if(assigned==='' || description===''){
            return ;
        }

        props.addTodo(assigned, description);

        setAssigned('');
        setDescription('');

    }

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" 
                    onChange={e=>setAssigned(e.target.value)}
                    value={assigned} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3}
                    onChange={e=>setDescription(e.target.value)} 
                    value={description} required/>
                </div>
                <button type="button" className="btn btn-primary mt-3"
                onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    );
}

/* export default NewTodoForm; */