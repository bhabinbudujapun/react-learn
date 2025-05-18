import React from "react";

function TodoItem({ todo, deleteTodo, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(todo.id);
    console.log(todo);
  }

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={handleChange}
        id={todo.id}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </div>
  );
}

export default TodoItem;
