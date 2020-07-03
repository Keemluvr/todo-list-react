import React from "react";
import { Link } from 'react-router-dom'

import TodoProvider from "../contexts/TodoContext";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

import GlobalStyles from '../styles/global'
import styled from 'styled-components'

export const  TodoContainer = styled.div`
  background: #345;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50vw;
  margin: 10vh auto;
  padding: 30px 0;
`
const Todo = () => {
  return (
    <TodoContainer>
      <GlobalStyles />
      <TodoProvider>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </TodoProvider>

      <Link to="/creators">Creators \o/</Link>
    </TodoContainer>
  );
}

export default Todo;