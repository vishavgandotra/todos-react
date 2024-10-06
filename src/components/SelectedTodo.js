import React from 'react'

export const SelectedTodo = ({selectedTodo}) => {
    return (
        <div>
        {selectedTodo != undefined ? (<div>
                Name : <span>{selectedTodo.name}</span>
                desc : <span>{selectedTodo.desc}</span>
            </div>) : (<div>No todos selcted</div>)}
        </div>
    )
}
