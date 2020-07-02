import React from "react";

import DoneTodo from '../DoneTodo'
import DeleteTodo from '../DeleteTodo'

const TodoListItem = ({ todo, index }) => {

  return (
    <li>
        <DoneTodo todoIndex={index}/>
        <p><strong>{todo.id}</strong> - {todo.title} - {todo.done ? 'true' : 'false'}</p>
        <DeleteTodo todoIndex={index}/>
    </li>
  );
};

export default TodoListItem;
