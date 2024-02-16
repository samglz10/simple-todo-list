import React from "react"

const TodoList = ()=>{
    return (
        <div>
            <h1>Vite + React Todo List </h1>
            <div className="main-container">
            <input type="text" placeholder="add a new todo"></input>
            <button type="submit"> Add task</button>
            <ul>
                <li> Todo 1</li>
                <li> Todo 2</li>
                <li> Todo 3</li>
            </ul>
            </div>
        </div>
    
    )
}
export default TodoList