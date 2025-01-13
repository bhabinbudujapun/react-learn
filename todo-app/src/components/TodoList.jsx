import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  
  //Demo Values
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

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          todo={todo}
        />
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
