import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { todoContext } from '../services/TodosContext';

export const AddTodo = (props) => {
    const {todos, settodos} = useContext(todoContext);
    const [newtodo, setnewtodo] = useState({name:'',desc:''})
    const onSubmitTodo = () => {
        let size = todos?.length;
        settodos([...todos,
            {id:size+1,
            name:newtodo.name,
            desc:newtodo.desc
        }]);
        props.toggleForm();
    };
    const onDataChange = (e) => {
        let {name, value} = e.target;
        setnewtodo({...newtodo, 
            [name]:value});
    }
    return (
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={onDataChange} name="name" value={newtodo.name} placeholder="Enter name" />

        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>DEsc</Form.Label>
          <Form.Control type="text" name="desc" onChange={onDataChange} value={newtodo.desc} placeholder="DEscription" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={onSubmitTodo}>
          Submit
        </Button>
      </Form>
    )
}
