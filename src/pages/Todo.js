import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TodoProvider from "../contexts/TodoContext";

import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Todo = ({ theme }) => {
  return (
    <TodoContainer>
      <TodoProvider>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </TodoProvider>
      <Link to="/creators">Creators \o/</Link>
    </TodoContainer>
  );
};

export const TodoContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  max-width: 50vw;
  margin: 10vh auto;
  padding: 30px 0;
  border-radius: 15px;
`;

export default Todo;
