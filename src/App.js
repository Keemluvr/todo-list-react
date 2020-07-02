import React from "react";

import TodoProvider from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <TodoProvider>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </TodoProvider>
  );
}

export default App;
