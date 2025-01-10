import React from "react";

function TodoItem({ todo }) {
  if (!todo) {
    console.log("No todo item found");
    return null;
  }
  return (
    <div>
      <input type="checkbox" defaultChecked={todo.completed} id={todo.id} />
      <span>{todo.title}</span>
    </div>
  );
}

export default TodoItem;
