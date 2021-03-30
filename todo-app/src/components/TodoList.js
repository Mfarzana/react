import React, {useState} from 'react';
import TodoForm from './TodoForm'
function TodoList() {
    const [todos, setTodoes]=useState([]);
    const addTodo= todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos=[todo, ...todos]
        setTodoes(newTodos);
        console.log(todos);
    }
    return (
        <div>
            <h1>Whats the plan for today</h1>
            <TodoForm />
        </div>
    )
}

export default TodoList
