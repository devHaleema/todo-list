import React, { useState } from 'react';
import Header from './Header';
import "./App.css";
//import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList';
import NewTask from './NewTask';

function App() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <div className="todo">
      <Header />
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskList allTasks={allTasks} handleDelete={handleDelete} />
    </div>
  );

};



export default App;
