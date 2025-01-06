import React from "react";

function TodoItem({ todo }) {
  if (!todo) {
    console.log("No todo item found");
    return null;
  }
  return (
    <div>
      <input type="checkbox" checked={todo.completed} id={todo.id} />
      <p>{todo.title}</p>
    </div>
  );
}

export default TodoItem;
