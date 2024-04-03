import React from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>React To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
