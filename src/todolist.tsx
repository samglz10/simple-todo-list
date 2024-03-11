import React from 'react'
import { useState, useEffect } from "react";

const TodoList = ()=>{
    const [done, setDone] = useState(false);
    const [newTodo, setNewTodo] = useState({task:'', done: done });
    const [todos, setTodos]= useState([]);

    const handleChange =(e)=>{
        const newValue = e.target.value
        setNewTodo(prevTodo=> ({...prevTodo, task: newValue, done: done}));
    }
    const handleComplete = ()=>{
        setDone(done => !done)
        console.log(done)
    }
    const handleSubmit = ()=>{
        setTodos([newTodo, ...todos])
        console.log(newTodo)
        localStorage.setItem('todos', JSON.stringify([...todos]));
        
    }

    const handleDeleteTask = (index)=>{
        let removeTodo = [...todos];
        removeTodo.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(removeTodo))
        setTodos(removeTodo);
    }

    //watch for localstorage and changes
    useEffect(()=>{
        let storedTodo = JSON.parse(localStorage.getItem('todos'));
        if(storedTodo){
            setTodos(storedTodo);
        }
    },[done])

    return (
        <div>
            <h1>Vite + React Todo List </h1>
            <div className="main-container">
                <div className="input-container">
                    {/** */}
                    <input type="text" placeholder="Add a task" value={newTodo.task} onChange={handleChange}  ></input>
                    <button className="primary-btn"type="submit" onClick={handleSubmit}> Add task</button>
                </div>
            <ul>
                {todos.map((todo, index)=>{
                    return (
                        <div className="todo-wrapper" key={index}>
                            <li onClick={handleComplete} className="todos" >{todo.task}</li>
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