import React, { useContext } from 'react'
import {todoContext} from '../services/TodosContext';
export const Todos2 = () => {
    const {setSelectedTodo, todos} = useContext(todoContext);
   
    return (
        <div>
            <h2>Todos List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} onClick={() =>setSelectedTodo(todo)}>
                        {todo.name}
                    </li>
                ))}
            </ul>
        </div>)
}
