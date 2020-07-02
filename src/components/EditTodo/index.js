import React, { useContext } from "react";
import PropTypes from 'prop-types';

import { TodoContext } from "../../contexts/TodoContext";

const EditTodo = todoIndex => {
    const { editTodo } = useContext(TodoContext);

    const handleButtonEditTodo = () => {
        editTodo(todoIndex)
    }

    return <button onClick={handleButtonEditTodo}>Edit</button>;
};

EditTodo.propTypes = {
    todoIndex: PropTypes.number.isRequired
};

export default EditTodo;
