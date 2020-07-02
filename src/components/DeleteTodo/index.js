import React, { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";

const DeleteTodo = todoIndex => {
    const { deleteTodo } = useContext(TodoContext);

    const handleButtonDeleteTodo = () => {
        deleteTodo(todoIndex)
    }
    
    return <button onClick={handleButtonDeleteTodo}>Delete</button>;
};

export default DeleteTodo;
