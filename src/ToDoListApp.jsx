import React, { useState } from 'react';

const ToDoListApp = () => {
  const [tasks, setTasks] = useState(["Exercise", "Spend time with family or friends", "Meeting with Hunain"]);
  const [newtask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newtask.trim() !== "") {
      setTasks(t => [...t, newtask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">To Do List App</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded-lg shadow-md"
          >
            <span>{task}</span>
            <div className="flex gap-2">
              <button
                onClick={() => moveTaskUp(index)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Up
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Down
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListApp;
