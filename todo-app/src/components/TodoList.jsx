import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: true },
  ]);

  const [text, setText] = React.useState("");
  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)}>Add</button>
    </div>
  );
}

export default TodoList;
