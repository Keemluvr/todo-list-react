import React from "react";
import PropTypes from 'prop-types';

import DoneTodo from '../DoneTodo'
import DeleteTodo from '../DeleteTodo'

import * as S from './style'

const TodoListItem = ({ todo, index }) => {

  return (
    <S.Li>
        <DoneTodo todoIndex={index}/>
        <p><strong>{todo.id}</strong> - {todo.title} - {todo.done ? 'true' : 'false'}</p>
        <DeleteTodo todoIndex={index}/>
    </S.Li>
  );
};

DeleteTodo.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
};

export default TodoListItem;
