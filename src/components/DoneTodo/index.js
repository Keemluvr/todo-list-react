import React, { useContext } from "react";
import PropTypes from 'prop-types';

import { TodoContext } from "../../contexts/TodoContext";

const DoneTodo = todoIndex => {
    const { doneTodo } = useContext(TodoContext);

    const handleCheckTodo = () => {
        doneTodo(todoIndex)
    }

    return <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckTodo}/>
};

DoneTodo.propTypes = {
    todoIndex: PropTypes.number.isRequired
};

export default DoneTodo;


