import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newDescription) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, description: newDescription } : task));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task));
  };

  const filteredTasks = filter === 'done' 
    ? tasks.filter(task => task.isDone)
    : filter === 'not' 
      ? tasks.filter(task => !task.isDone)
      : tasks;

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask addTask={addTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      <ListTask tasks={filteredTasks} toggleTask={toggleTask} editTask={editTask} />
    </div>
  );
};

export default App;
