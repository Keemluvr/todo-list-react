import React, { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";

const DoneTodo = todoIndex => {
    const { doneTodo } = useContext(TodoContext);

    const handleCheckTodo = () => {
        doneTodo(todoIndex)
    }

    return <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckTodo}/>
};

export default DoneTodo;


