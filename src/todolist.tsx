import { todo } from "node:test";
import React from "react"
import { useState } from "react";

const TodoList = ()=>{
    const [todos, setTodos] = useState("");
    const [todoArr, setTodoArr]= useState([]);
    const randomKey = Math.random()*100;
    const change =(e)=>{
        const newValue = e.target.value
        setTodos(newValue);
    }
    const submit = (e)=>{
        setTodoArr([todos, todoArr])
        alert(`Added todo: ${todos}`);
    }
    return (
        <div>
            <h1>Vite + React Todo List </h1>
            <div className="main-container">
            <input type="text" placeholder="add a new todo" onChange={change}></input>
            <button type="submit" onClick={submit}> Add task</button>
            <ul>
                <li >{todos}...</li>
                {todoArr.map((todo)=>{
                    return (
                        <li key={randomKey}>{todo}</li>
                    );
                })}
            </ul>
            </div>
        </div>
    
    )
}
export default TodoList