import React from 'react'
import PropTypes from 'prop-types'; 

export const Todos = (props) => {
    return (
        <div>
          <h2>Todos List</h2>
          <ul>
            {props.todos.map((todo) => (
              <li key={todo.id} onClick={() => props.onSelect(todo)}>
                {todo.name}
              </li>
            ))}
            </ul>
            </div>)
}

Todos.propTypes = {
    onSelect: PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
}