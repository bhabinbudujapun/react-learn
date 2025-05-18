
import React, { useState } from 'react';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === editingIndex ? editingText : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={saveTask}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;


