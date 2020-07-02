import React, { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";
import TodoListItem from "../TodoListItem";

import './style.css'

const TodoList = () => {
    const context = useContext(TodoContext)

    const data = context.todos.map( (todo, index) => (
        <TodoListItem key={todo.id} todo={todo} index={index}></TodoListItem>
    ))
    return (
        <ul>
            {data}
        </ul>
    )
};

export default TodoList;
