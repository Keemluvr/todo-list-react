import React, { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "go to the market", done: false },
    { id: 2, title: "go to the gym", done: false },
    { id: 3, title: "buy bread", done: false },
  ]);

  const saveTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = ({ todoIndex }) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  const doneTodo = ({ todoIndex }) => {
    let newArr = [...todos];
    newArr[todoIndex].done = !todos[todoIndex].done;
    setTodos(newArr);
  };

  return (
    <TodoContext.Provider value={{ todos, doneTodo, saveTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
