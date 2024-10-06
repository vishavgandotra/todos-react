import React, { createContext, useState } from 'react'

export const todoContext = createContext();

export const TodosContext = ({children}) => {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [todos, settodos] = useState([
        {
            id:1,
            name:"todo1",
            desc: "test description 1"
        },
        {
            id:2,
            name:"todo2",
            desc: "test description 2"
        },
        {
            id:3,
            name:"todo3",
            desc: "test description 3"
        }
    ]);

    let value = {selectedTodo, setSelectedTodo, todos, settodos};
    return (
        <todoContext.Provider value={value}>
            {children}
        </todoContext.Provider>
    )
}
