import React from "react"
import { useState } from "react";

const TodoList = ()=>{
    const [todos, setTodos] = useState("");
    const [todoArr, setTodoArr]= useState([]);
    const change =(e)=>{
        const newValue = e.target.value
        setTodos(newValue);
    }
    const submit = (e)=>{

        setTodoArr([todos, ...todoArr])
    }

    const deleteTask = (e)=>{
        
    }
    return (
        <div>
            <h1>Vite + React Todo List </h1>
            <div className="main-container">
            <input type="text" placeholder="add a new todo" value={todos} onChange={change}></input>
            <button className="primary-btn"type="submit" onClick={submit}> Add task</button>
            <ul>
                {todoArr.map((todo, index)=>{
                    return (
                        <div className="todo-wrapper">
                            <li key={index}>{todo}</li>
                            <button type="submit"  className="secondary-btn"> Delete </button>
                        </div>
                    );
                })}
            </ul>
            </div>
        </div>
    
    )
}
export default TodoList