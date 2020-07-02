import React, { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";

const EditTodo = todoIndex => {
    const { editTodo } = useContext(TodoContext);

    const handleButtonEditTodo = () => {
        editTodo(todoIndex)
    }

    return <button onClick={handleButtonEditTodo}>Edit</button>;
};

export default EditTodo;
