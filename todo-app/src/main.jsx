import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from "./todo"
import "./styles/main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp title="My ToDo-App"></TodoApp>
  </React.StrictMode>,
)
