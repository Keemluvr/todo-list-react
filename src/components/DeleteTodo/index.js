import React, { useContext } from "react";
import PropTypes from 'prop-types';

import { TodoContext } from "../../contexts/TodoContext";

const DeleteTodo = todoIndex => {
    const { deleteTodo } = useContext(TodoContext);

    const handleButtonDeleteTodo = () => {
        deleteTodo(todoIndex)
    }
    
    return <button onClick={handleButtonDeleteTodo}>Delete</button>;
};

DeleteTodo.propTypes = {
    todoIndex: PropTypes.number.isRequired
};

export default DeleteTodo;
