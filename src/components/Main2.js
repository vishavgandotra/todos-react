import React, { useState } from 'react'
import { TodosContext } from '../services/TodosContext'
import { AddTodo } from './AddTOdo'
import { SelectedTodos2 } from './selectedTodos2'
import { Todos2 } from './todos2'

export const Main2 = () => {

    const [showForm, setShowForm] = useState(false);

    const toggleForm =()=> {
        setShowForm(!showForm);
    }

    return (
        <TodosContext>
        <button onClick={toggleForm}>Create TODO </button>
        {showForm && (<AddTodo toggleForm={toggleForm}/>)}
            <Todos2/>
            <SelectedTodos2/>
        </TodosContext>
    )
}
