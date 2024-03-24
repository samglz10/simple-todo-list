import React from 'react'
import { useState, useEffect } from "react";

type Todo = {
    task: string,
    done: boolean
}
const TodoList = ()=>{
    const [newTodo, setNewTodo] = useState({task:'', done: false,});
    const [todos, setTodos]= useState<Todo[]>(()=>{
        const existingTodos = localStorage.getItem('todos');
        if(existingTodos === undefined ||existingTodos === null ){
            return [];
        } else {
            return JSON.parse(existingTodos)
        }
       
    });

    const handleChange =(e)=>{
        const newValue = e.target.value
        setNewTodo(prevTodo=> ({...prevTodo, task: newValue}));
    }
    const handleComplete = (index:number)=>{
        
       setTodos((prevTodos)=>{
        console.log(index)
        const newTodos = prevTodos.slice(index);
        newTodos[index].done = true;
        const completed = []
       console.log('prevTodos', prevTodos)
       console.log('newTodos', newTodos, newTodos[index].done)
        
       })
       

        
        /*
        const newTodos = prevTodos.slice(index,1);
        [{...prevTodos, newTodos.[index].done: true}]
        
             */
     
       
       
        
    }
    const handleSubmit = ()=>{
        setTodos([newTodo, ...todos])
    
    }
    const handleDeleteTask = (index)=>{
        let removeTodo = [...todos];
        removeTodo.splice(index, 1);
        setTodos(removeTodo);
    }
    // todos useEffect
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

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
                {todos && todos.map((todo, index)=>{
                    return (
                        <div className="todo-wrapper" key={index}>
                            <li onClick={()=>{handleComplete(index)}} className="todos" >{todo.task}</li>
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