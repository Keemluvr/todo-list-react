import React from "react";
import PropTypes from 'prop-types';

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

DeleteTodo.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
};

export default TodoListItem;
