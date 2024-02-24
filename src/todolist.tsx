import React from 'react'
import { useState, useEffect } from "react";

const TodoList = ()=>{
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos]= useState([]);

    const handleChange =(e)=>{
        const newValue = e.target.value
        setNewTodo(newValue);
    }

    const handleSubmit = (e)=>{
        setTodos([newTodo, ...todos])
        localStorage.setItem('todos', JSON.stringify([...todos]));
        setNewTodo('');

    }

    const handleDeleteTask = (index)=>{
        let removeTodo = [...todos];
        removeTodo.splice(index, 1);
        console.log(removeTodo);
        localStorage.setItem('todos', JSON.stringify(removeTodo))
        setTodos(removeTodo);
    }
    //watch for localstorage and changes
    useEffect(()=>{
        let storedTodo = JSON.parse(localStorage.getItem('todos'));
        if(storedTodo){
            setTodos(storedTodo);
        }
    },[])

    return (
        <div>
            <h1>Vite + React Todo List </h1>
            <div className="main-container">
                <div className="input-container">
                    <input type="text" placeholder="Add a task" value={newTodo} onChange={handleChange}></input>
                    <button className="primary-btn"type="submit" onClick={handleSubmit}> Add task</button>
                </div>
            <ul>
                {todos.map((todo, index)=>{
                    return (
                        <div className="todo-wrapper" key={index}>
                            <li >{index}{todo}</li>
                            <button type="submit" onClick={()=>{handleDeleteTask(index)}} className="secondary-btn"> Delete </button>
                        </div>
                    );
                })}
            </ul>
            </div>
        </div>
    )
}
export default TodoList