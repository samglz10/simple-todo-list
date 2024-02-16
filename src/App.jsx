import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './todolist'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo]=useState([""])

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <TodoList />
    

    </>
  )
}

export default App
