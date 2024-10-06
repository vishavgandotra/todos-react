import React, {useState} from 'react'
import { SelectedTodo } from './SelectedTodo';
import { Todos } from "./todos";
export const Main = () => {
    const styles = {
        display:"flex",
        "justifyContent": "space-around"
    };

    let todo = [
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
    ];
    
    // let selectedTodo;
    let ontodoSelect = (todo) => {
        console.log("Selected",todo);
        selectedTodo = todo;
    };
    const [selectedTodo, setselectedTodo] = useState(null);
    return (
        <div style={styles}>
            <Todos todos={todo} onSelect={setselectedTodo}/>
            <SelectedTodo selectedTodo={selectedTodo}/>
        </div>
    )
}
