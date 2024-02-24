import React from 'react'
import { useState, useEffect } from "react";

const TodoList = ()=>{
    const [todos, setTodos] = useState('');
    const [todoArr, setTodoArr]= useState([]);

    const handleChange =(e)=>{
        const newValue = e.target.value
        setTodos(newValue);
    }

    const handleSubmit = (e)=>{
        setTodoArr([todos, ...todoArr])
        localStorage.setItem('todos', JSON.stringify([...todoArr]));
    }

    const handleDeleteTask = (index)=>{
        let removeTodo = [...todoArr];
        removeTodo.slice(index, 0);
        localStorage.setItem('todos', JSON.parse([...todoArr]))
        setTodos(removeTodo);
    

    }
    //watch for localstorage and changes
    useEffect(()=>{
        let storedTodo = JSON.parse(localStorage.getItem('todos'));
        if(storedTodo){
            setTodoArr(storedTodo);
        }
    },[])

    return (
        <div>
            <h1>Vite + React Todo List </h1>
            <div className="main-container">
            <div className="input-container">
                <input type="text" placeholder="add a new todo" value={todos} onChange={handleChange}></input>
                <button className="primary-btn"type="submit" onClick={handleSubmit}> Add task</button>
            </div>
            <ul>
                {todoArr.map((todo, index)=>{
                    return (
                        <div className="todo-wrapper">
                            <li key={index}>{todo}</li>
                            <button type="submit" onClick={handleDeleteTask} className="secondary-btn"> Delete </button>
                        </div>
                    );
                })}
            </ul>
            </div>
        </div>
    )
}
export default TodoList