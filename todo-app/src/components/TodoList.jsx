import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: true },
  ]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
