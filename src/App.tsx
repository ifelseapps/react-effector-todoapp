import React from 'react'
import './App.css'
import { TodoList } from './components/TodoList/TodoList'
import { AddForm } from './components/AddForm/AddForm'

function App() {
  return (
    <div className="wrapper">
      <h1>Список задач</h1>
      <hr />
      <AddForm />
      <TodoList />
    </div>
  )
}

export default App
