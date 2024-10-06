import React, { useContext } from 'react'
import { todoContext } from '../services/TodosContext';

export const SelectedTodos2 = () => {
    const {selectedTodo} = useContext(todoContext);

    return (
        <div>
        {selectedTodo != null ? (<div>
                Name : <span>{selectedTodo.name}</span>
                desc : <span>{selectedTodo.desc}</span>
            </div>) : (<div>No todos selcted</div>)}
        </div>
    )
}
