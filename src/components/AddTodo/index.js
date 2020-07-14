import React, { useContext, useState } from "react";

import { TodoContext } from "../../contexts/TodoContext";

import * as S from './style'

const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveTodo(todo);
  };

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  return (
    <S.Form onSubmit={handleFormSubmit}>
      <S.Input
        type="text"
        name="title"
        id="title"
        placeholder="new task..."
        onChange={handleInputChange}
      />
      <S.Button>Add</S.Button>
    </S.Form>
  );
};

export default AddTodo;
