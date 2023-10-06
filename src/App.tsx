import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { TODO_MOCK_DATA } from './__mock__/todo';
import { AddForm } from './components/AddForm/AddForm';

function App() {
  return (
    <div className="wrapper">
      <h1>Список задач</h1>
      <hr />
      <AddForm />
      <TodoList todo={TODO_MOCK_DATA} />
    </div>
  );
}

export default App;
